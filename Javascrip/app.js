
// la 1 dinh dang du lieu
// javaScript Object Notation
// Json Number ,boolean ,Null,Array,string 
// Stringify tu java->json
// parse tu json->javascript
// PROMISE (sync,async)
    // Sync :Đồng bộ hóa
    // aync :Bất đông bộ hóa 
        // setTimeout,setInterval,fetch,xmlhttpRequest
        // file reading,request animation frame
        // CallBack:xử lí bất đồng bộ 
            // calback hell 
            // Pyramid of doom 
            // memmory leak

// PROMISE:
 // exec thuc thi
    // resolve():thanh cong
    // reject():that bai

    var promise= new Promise(
        function (resolve,reject){
            resolve()
        }
    )
    // co 3 trang thai la resolve,reject
    // ,pendding:la khi promise khong duoc goi 
    // Ta có Promise sinh ra để giải quyết vấn đế callback hell
    // callback hell là gọi lại nhiều lần viết code dài và khó hiêu
    // chú ý ta có thể then nhiều lần
    // lúc này khi ta nhận resolve thì then sẽ được thực thi
    // khi nhận reject thì catch sẽ được thực thi 


    // Chain
    // giá trị trả về phụ thuoci vao then dung truôc
    
promise 
.then(function(courses) {
    console.log("Thanh cong")
})
.catch(function(error) {
    console.log("That bai")
})
.finally(function(){
    console.log("Done")
})  

// 
function sleep (ms){
        return new Promise((resolve) => {
            setTimeout(resolve,ms)
        })
}

sleep(100)
    .then(function(){
        console.log(1)
        return sleep(1000)
})
.then(function(){
    console.log(1)
    return sleep(1000)
})

.then(function(){
    console.log(1)
    return sleep(1000)
})

