const processContact = contact => ({
    name:`${contact.name.first} ${contact.name.last}`,
    phone: contact.phone

})

export const fetchUsers = async () => {
    // const response = await fetch('https://randomuser.me/api/?results=5')
    const response = await fetch('https://www.charmeem.com/admin/style/jsonadm/order?page[limit]=200')
    const {results} = await response.json()

    return results.map(processContact)

}

export const login = async (username, password) => {

    // const response = await fetch('http://localhost:8000', {
        const response = await fetch('https://www.charmeem.com/admin/style/jsonadm/order?page[limit]=200', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({username, password}),
    })
    // console.log(response)
    if (response.ok) {

        const {token} = await response.json()
        return token
    }

    const errMessage = await response.text()
    throw new Error(errMessage)
}

export const poorlyFormatted = usedVar => usedVar


// const processContact = contact => ({
//     name:`${contact.name.first} ${contact.name.last}`,
//     phone: contact.phone
//
// })
//
// export const fetchUsers = async () => {
//     const response = await fetch('https://www.charmeem.com/admin/style/jsonadm/order?page[limit]=200')
//     const {results} = await response.json()
//
//     return results.map(processContact)
//
// }