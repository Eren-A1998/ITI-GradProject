let users=[{id:20,name:'radwa'},{id:25,name:'Ali'}]

export async function getUser(id)
{
    let user=users.filter(usr=>usr.id==id)
    return{
        type:'GET_User',
        payload:user
    }

}

