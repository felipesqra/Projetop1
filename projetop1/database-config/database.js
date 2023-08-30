import { db } from './firebase';
import {
    collection,
    query,
    where,
    getDocs,
    doc as firestoreDoc,
    setDoc as firestoreSetDoc,
    updateDoc as firestoreUpdateDoc,
    deleteDoc as firestoreDeleteDoc,
    getDoc as firestoreGetDoc
} from 'firebase/firestore';

// Users collection reference
const usersCollection = collection(db, 'users');

// Groups collection reference
const groupsCollection = collection(db, 'groups');

// User document reference
function userDocument(userId) {
    return firestoreDoc(usersCollection, userId);
}

// Group document reference
function groupDocument(groupId) {
    return firestoreDoc(groupsCollection, groupId);
}

// CRUD operations for users
const createUser = async (userData) => {
    try {
        const userIdExists = await checkUserIdExists(userData.userId);
        const pixExists = await checkPixExists(userData.pix);
        const emailExists = await checkEmailExists(userData.email);

        if (userIdExists || pixExists || emailExists) {
            console.error('User with duplicate values already exists');
            return;
        }

        await firestoreSetDoc(userDocument(userData.userId), userData);
        console.log('User created successfully');
    } catch (error) {
        console.error('Error creating user:', error);
    }
};

const updateUser = async (userId, updatedFields) => {
    try {
        await firestoreUpdateDoc(userDocument(userId), updatedFields);
        console.log('User updated successfully');
    } catch (error) {
        console.error('Error updating user:', error);
    }
};

const deleteUser = async (userId) => {
    try {
        await firestoreDeleteDoc(userDocument(userId));
        console.log('User deleted successfully');
    } catch (error) {
        console.error('Error deleting user:', error);
    }
};

const readUser = async (userId) => {
    try {
        const userSnapshot = await firestoreGetDoc(userDocument(userId));
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
        const groupIdExists = await checkGroupIdExists(groupData.groupId);

        if (groupIdExists) {
            console.error('Group with duplicate groupId already exists');
            return;
        }

        await firestoreSetDoc(groupDocument(groupData.groupId), groupData);
        console.log('Group created successfully');
    } catch (error) {
        console.error('Error creating group:', error);
    }
};

// Check if a user ID already exists
const checkUserIdExists = async (userId) => {
    const userSnapshot = await firestoreGetDoc(userDocument(userId));
    return userSnapshot.exists();
};

// Check if a pix value already exists
const checkPixExists = async (pix) => {
    try {
        const usersRef = collection(db, 'users');
        const emailQuery = query(usersRef, where('pix', '==', pix));
        const querySnapshot = await getDocs(emailQuery);

        return !querySnapshot.empty;
    } catch (error) {
        console.error('Error checking email:', error);
        return false;
    }
};

// Check if an email value already exists
const checkEmailExists = async (email) => {
    try {
        const usersRef = collection(db, 'users');
        const emailQuery = query(usersRef, where('email', '==', email));
        const querySnapshot = await getDocs(emailQuery);

        return !querySnapshot.empty;
    } catch (error) {
        console.error('Error checking email:', error);
        return false;
    }
};

// Check if a group ID already exists
const checkGroupIdExists = async (groupId) => {
    const groupSnapshot = await firestoreGetDoc(groupDocument(groupId));
    return groupSnapshot.exists();
};

const generateUserId = () => {
    return firestoreDoc(usersCollection).id;
};

const generateGroupId = () => {
    return firestoreDoc(groupsCollection).id;
};

export {
    createUser,
    updateUser,
    deleteUser,
    readUser,
    createGroup,
    generateUserId,
    generateGroupId
};