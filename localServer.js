// const readline = require("readline");
const axios = require('axios');
const express = require('express');
const cors = require('cors');


// 웹 서버 생성

const app = express();
const port = 3000;

app.use(cors());

app.get('/', async (req, res) => {
    // res.send(titles);
    //res.send 는 결국 res.write 와 res.end이기 때문에 한번만 사용가능
    titles = []
    console.log('console');
    console.log('query는',req.query);
    // console.log(req.query);

    const url = 'https://openapi.naver.com/v1/search/local.json';
    const headers = { 
        'X-Naver-Client-Id': 'id',
        'X-Naver-Client-Secret': 'secret'
    };
    //잘 불러와지면 axios.get(url에다 요청해 res가져오기)
    try {
        const res = await axios.get(url, {
            headers,
            params: req.query
        });
        
        // for 문 대신 forEach 사용

        // let titles = [];
        // res.data['items'].forEach(element => titles.push(element['title']));
        // console.log('titles:',titles);
        // console.log('test',res.data['items']);

        // for 문 대신 map 사용

        titles = res.data['items'].map(element => element['title']);
        console.log('titles:',titles);
        
    // 오류나면 오류메시지
    } catch(error) {
        console.error(error);
    }
    res.send(titles);
}); 

// 'localhost:3000/test'의 req(요청받는값),res(응답값) 설정
app.get('/test1', async function (req, res){
    res.json({message:'babo'});
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});




// Input 콘솔에서 받기

// function inputKeyword() {
//   const rl = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout,
//   });
//   rl.on("line", async(line) => {
//       console.log("input:",line);
//       await getData(line);
//       rl.close();
//   });
//   rl.on('close', () => {
//     process.exit();
//   })
// }

// inputKeyword();

 

//html로 input 받아서 넣기 --
