import firebase from "./firebase";

const db = firebase.firestore();

//page where you'll access the firestore aka collections data to create functions for usage

export async function getRiders(collection, setRiders) {
    const collectionData = await db.collection(collection)

    collectionData.onSnapshot((snapshot) => {
        let arr = [];
        snapshot.forEach(doc => {
            // console.log(doc)
            // console.log("doc.id", doc.id)
            // console.log("actual info", doc.data())
            let tempObj = {...doc.data(), id: doc.id}
            //turning it to an array of objects
            arr.push(tempObj)
        })
        setRiders(arr)
    }, (err) => {
        console.log(err)
    })
}

export async function addRider(collection, data, count) {

   await db.collection(collection).doc(`${count}`).set({...data,id:`${count}`})
}

export async function deleteRider(collection, id) {
     await db.collection(collection).doc(id).delete()
}

export async function updateRider(collection,id) {
    await db.collection(collection).doc(id).update({

    })
}

export async function getItemInfo(collection, setItemInfo) {
    const collectionData = await db.collection(collection)

    collectionData.onSnapshot((snapshot) => {
        let arr2 = [];
        snapshot.forEach(doc => {
            let tempObj2 = {...doc.data(), id: doc.id}
            arr2.push(tempObj2)
        })
        setItemInfo(arr2)
    }, (err) => {
        console.log(err)
    })
}

