export const registrationApi = async (body)=>{
    try {
        const response = fetch(process.env.REACT_APP_SERVER_URL+'/api/auth/local/register',{
            body,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        if(!response.ok){
            return new Error('Ошибка при загрузке данных')
        }
        return await response.json()
    }catch (error){
        return error
    }
}