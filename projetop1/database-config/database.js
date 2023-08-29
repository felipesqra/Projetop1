import {db} from '../../../database-config/firebase';
import { doc, updateDoc, setDoc, deleteDoc, getDoc, collection } from 'firebase/firestore';

// Users collection reference
const usersCollection = collection(db, 'users');

// Groups collection reference
const groupsCollection = collection(db, 'groups');

// User document reference
function userDocument(userId) {
    return doc(usersCollection, userId);
}

// Group document reference
function groupDocument(groupId) {
    return doc(groupsCollection, groupId);
}

// CRUD operations for users
const createUser = async (userData) => {
    try {
        await setDoc(userDocument(userData.userId), userData);
        console.log('User created successfully');
    } catch (error) {
        console.error('Error creating user:', error);
    }
};

const updateUser = async (userId, updatedFields) => {
    try {
        await updateDoc(userDocument(userId), updatedFields);
        console.log('User updated successfully');
    } catch (error) {
        console.error('Error updating user:', error);
    }
};

const deleteUser = async (userId) => {
    try {
        await deleteDoc(userDocument(userId));
        console.log('User deleted successfully');
    } catch (error) {
        console.error('Error deleting user:', error);
    }
};

const readUser = async (userId) => {
    try {
        const userSnapshot = await getDoc(userDocument(userId));
        if (userSnapshot.exists()) {
            return userSnapshot.data();
        } else {
            console.log('User not found');
            return null;
        }
    } catch (error) {
        console.error('Error reading user:', error);
        return null;
    }
};

// CRUD operations for groups
const createGroup = async (groupData) => {
    try {
        await setDoc(groupDocument(groupData.groupId), groupData);
        console.log('Group created successfully');
    } catch (error) {
        console.error('Error creating group:', error);
    }
};

// Similar to updateUser, deleteGroup, and readGroup functions

export { createUser, updateUser, deleteUser, readUser, createGroup };

// // Generate a unique ID for user and group
// const userId = doc(usersCollection).id; // Get a unique user ID
// const groupId = doc(groupsCollection).id; // Get a unique group ID
//
// // Add the generated IDs to the user and group data
// userData.userId = userId;
// groupData.groupId = groupId;
//
// // Using the create functions
// createUser(userData);
// createGroup(groupData);