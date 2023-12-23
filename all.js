/*
// 將陣列資料集 使用data 變數承接
let data = [
    {
        Charge:"投幣式",
        name:"小花充電站"
    }, {
        Charge:"免費",
        name:"小明充電站"
    }, {
        Charge:"免費",
        name:"小天充電站"
    }, {
        Charge:"免費",
        name:"小戴充電站"
    },
    

];

// 分割線--------------------------------------------------------------------------------------------------------------------------------------------------------
// 預設載入功能
    // html目前有ul.list，先把.list（DOM） 用變數list來承接。接著把 data 陣列的資訊（陣列內物件的屬性的字串值）用for each取出來，透過literals重組。在使用.innerHTML重新修改html 架構

const LIST = document.querySelector(".list"); //DOM可以放到外部讓全域做使用

function init(){
    let str ="";
    data.forEach(function(value,index){
      let content = `<li>${value.name},${value.Charge}</li>`;
      str+=content;
    })
    LIST.innerHTML = str;
  }
  
  init(); // 包裝成init，讓頁面一打開就預設執行，所以看到的內容為修改後的HTML data內容

  
// 分割線--------------------------------------------------------------------------------------------------------------------------------------------------------
// 篩選功能   
  //目前有div.filter，裡面有兩個input button和空白處，分別為免費和投幣式，現在要使用監聽來回傳e.target.value回來，如果空白處會是undefined，寫if 搭配return讓點擊空白處就中斷function。
  //當點擊input 如果input 和 data的資料 也就是foreach的value一樣的時候，就會重新賦予字串到list，因為會有下innerHTML 所以實際這邊改動的是html 架構。
    // e.target.value 是.filter 的input button 的值，click當下 的細部資料
    // data.item.charge 是陣列的forEach 的值
  
const FILTER = document.querySelector(".filter"); //將div.filter 代入到filter變數，以操控DOM
FILTER.addEventListener("click",function(e){    //將.filter註冊監聽，觸發click事件時，就執行裡面的function
    if(e.target.value == undefined){ //function開始
        console.log("你點到空白處");
        return;
    }
    let str ="";//宣告一個存活在這個event的空字串
    data.forEach(function(value,index){        //因為data資料不少，所以使用forEach跑
        if(e.target.value == "檢視全部"){
            let content = `<li>${value.name},${value.Charge}</li>`; 
            str+=content;            
        }else if(e.target.value == value.Charge){     //如果點擊的內部值 和 data資料集的屬性值等同，str字串會加上content 變數，有四筆資料就會跑四次
            let content = `<li>${value.name},${value.Charge}</li>`; 
            str+=content;
        }
    })
    LIST.innerHTML = str;
})

// 分割線--------------------------------------------------------------------------------------------------------------------------------------------------------
// 新增功能
    // 當我在stationName 和 stationCharge 輸入value，會push 進data，data 執行init function 即可
    // 在event，建立空物件，當點擊儲存btn ，會將DOM的value 賦予到宣告好的空物件，在將已經被賦值的物件oush到data資料集
    // 執行init function，把 data 陣列的資訊 用for each取出來，透過literals重組。在使用.innerHTML重新修改html 架構，最後展現的內容為最新的內容。
    // 針對input 和 select 這兩個dom做一個賦予空字串穿的動作，資料儲存送出後，歷史資料會被賦予空資料。
const stationName = document.querySelector(".stationName");
const stationCharge = document.querySelector(".stationCharge");
const btn = document.querySelector(".btn");

btn.addEventListener("click",function(e){
  if(stationName.value ==""){
    alert("請填寫正確資訊");
    return;
  } 
  
    let obj = {};
    obj.Charge = stationCharge.value;
    obj.name = stationName.value;
    data.push(obj);
    init();
    stationName.value="";
    stationCharge.value="免費";

})

*/
let data = [
    {
        Charge:"投幣式",
        name:"小花充電站"
    }, {
        Charge:"免費",
        name:"小明充電站"
    }, {
        Charge:"免費",
        name:"小天充電站"
    }, {
        Charge:"免費",
        name:"小戴充電站"
    },
];

const LIST = document.querySelector(".list"); //DOM可以放到外部讓全域做使用


function init() {
    let str ="";
    data.forEach(function(value){
        let content = `<li>${value.name},${value.Charge}</li>`;
        str+=content;
    })    
    LIST.innerHTML = str;
}

init();

const FILTER = document.querySelector(".filter"); //將div.filter 代入到filter變數，以操控DOM
FILTER.addEventListener("click",function(e){    //將.filter註冊監聽，觸發click事件時，就執行裡面的function
    if(e.target.value == undefined){ //function開始
        console.log("你點到空白處");
        return;
    }
    let str ="";//宣告一個存活在這個event的空字串
    data.forEach(function(value,index){        //因為data資料不少，所以使用forEach跑
        if(e.target.value == "檢視全部"){
            let content = `<li>${value.name},${value.Charge}</li>`; 
            str+=content;            
        }else if(e.target.value == value.Charge){     //如果點擊的內部值 和 data資料集的屬性值等同，str字串會加上content 變數，有四筆資料就會跑四次
            let content = `<li>${value.name},${value.Charge}</li>`; 
            str+=content;
        }
    })
    LIST.innerHTML = str;
})


