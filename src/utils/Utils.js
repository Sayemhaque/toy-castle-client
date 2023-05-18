

//post a toy to the database

const addToy = async (data) => {
 try {
    const res = await  fetch("http://localhost:5000/toys",{
        method:"POST",
        headers:{"content-Type":"application/json"},
        body:JSON.stringify(data)
      })
      console.log(res)
 } catch (error) {
    console.log(error)
 }
} 

 


export {addToy}