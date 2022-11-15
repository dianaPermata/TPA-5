# **Web Service & RESTful API for ToDoList Application**

## **Built With**
- express.js
- mongoose
- mongodb
- jsonwebtoken
- bcrypt
- dotev

## **How To Use**
- Clone repository
 ``git clone https://github.com/Fala2002/TPA-5``
- Menginstall semua dependencies, seperti express, mongoose, nodemon, jsonwebtoken, bcrypt, dotev dengan cara
 ``npm install express``
 ``npm install mongoose``
 ``npm install -D nodemon``
 ``npm install jsonwebtoken``
 ``npm install bcrypt``
 ``npm install dotev``
- Menjalankan project
 ``npm run dev``

## **Spesifikasi API**
### **User**
1. **Get All User**, Untuk mendapatkan semua data user.
    - Methods : get
    - Endpoint : api/user
      ``
    - Respons :
      ``
              {
          "message": "succes to get data",
          "data": [
            {
              "_id": "63733cfca680c88a6b43d7b1",
              "nama": "diana",
              "email": "diana@gmail.com",
              "password": "$2b$10$bibLSz3KqWlV9oLhTFpsh..lDr5konGDlMxlXvtiHemnLQKKBSR5C"
            },
            {
              "_id": "63733ed0ea1f770c2472d9c8",
              "nama": "permata",
              "email": "permata@gmail.com",
              "password": "$2b$10$KtQasexvbc5F/PrHHLjM5e3s7R1DU4x934f54HDCIedqmUxXe8KQy"
            }
          ]
        }
      ``

2. **Get User By Id**, Untuk mendapatkan data user berdasarkan id.
    - Methods : get
    - Endpoint : api/user/id
    - Respons :
     
      ``
      {
          "message": "succes to get data",
          "data": {
            "_id": "63733cfca680c88a6b43d7b1",
            "nama": "diana",
            "email": "diana@gmail.com",
            "password": "$2b$10$bibLSz3KqWlV9oLhTFpsh..lDr5konGDlMxlXvtiHemnLQKKBSR5C",
            "__v": 0
          }
        }
      ``

3. **Register**, Untuk melakukan registrasi.
    - Methods : post
    - Endpoint : api/user/register
    - Body :
     
      ``
      {
        name: String,
        email: String,
        password: String  
      } 
      ``
    - Respons :

      ``
      {
        Jika berhasil :
        "succesfully"
      }
      ``

4. **Login**, Untuk melakukan login/masuk.
    - Methods : post
    - Endpoint : api/user/login
    - Body :
   
    - 
      ``
      {
        email: String,
        password: String  
      } 
      ``
    - Respons :
    
      ``
      {
        Jika berhasil :
        "login succes"

        Jika gagal :
        "failed login"
      }
      ``

### **Task**
1. **Get All Task**, Untuk mendapatkan semua data task.
    - Methods : get
    - Endpoint : api/task
    - Respons :
  
      ``
         {
            "message": "success get data",
            "data": [
              {
                "_id": "63733f84ea1f770c2472d9cb",
                "title": "project-be",
                "isDone": true,
                "user": {
                  "_id": "63733ed0ea1f770c2472d9c8"
                }
              },
              {
                "_id": "63733f93ea1f770c2472d9cd",
                "title": "project-Febe",
                "isDone": true,
                "user": {
                  "_id": "63733ed0ea1f770c2472d9c8"
                }
              },
              {
                "_id": "63734081ea1f770c2472d9cf",
                "title": "project-Febe",
                "isDone": true,
                "user": {
                  "_id": "63733ed0ea1f770c2472d9c8"
                }
              }
            ]
          }
      ``

2. **Get User By Id**, Untuk mendapatkan data task berdasarkan id.
    - Methods : get
    - Endpoint : api/task/id
    - Respons :
  
      ``
          {
            "message": "succes get data",
            "data": {
              "_id": "63733f84ea1f770c2472d9cb",
              "title": "project-be",
              "isDone": true,
              "user": "63733ed0ea1f770c2472d9c8",
              "__v": 0
            }
          }
      ``

3. **Add task**, Untuk menambahkan task
    - Methods : post
    - Endpoint : api/task/addtask
    - Body :
  
      ``
        {
            "title":"project-Febe",
            "isDone":true,
            "user":"63733ed0ea1f770c2472d9c8"
        }
      ``
    - Respons :
  
      ``
      {
        Jika berhasil :
        "task has been created""
      }
      ``

4. **delete by id task**, Untuk menghapus data task byid
    - Methods : delete
    - Endpoint : api/task/id
    - Respons :
      ``
      {
        Jika berhasil :
        "Data deleted"

        Jika gagal : 
        "Could not found
      }
      ``

5. **Delete All task**, Untuk menghapus semua data task
    - Methods : delete
    - Endpoint : api/task/id
    - Respons :

      ``
      {
        Jika berhasil :
        "succes deleted data"

        Jika gagal : 
        "failed deleted data"
      }
      ``

6. **Update task**, Untuk update data task
    - Methods : patch
    - Endpoint : api/task/id
    - Body :
 
        ``
         {
            "_id": "637343be0681dc05d3e80d64",
            "title": "project-febe-20",
            "isDone": true,
            "user": "63733ed0ea1f770c2472d9c8",
            "__v": 0
          }
      `` 
    - Respons :

      ``
        jika berhasil:
         {
            "_id": "637343be0681dc05d3e80d64",
            "title": "project-febe-20",
            "isDone": true,
            "user": "63733ed0ea1f770c2472d9c8",
            "__v": 0
          }

          jika gagal : 
          messsage : "server error"
      ``