const THEMENUM = 24;
const ADJUSTNUM= 1;
var flag = 0;
var paraflag = 0;
var allTalkList = new Array();
var start;
var talkList = ["死ぬまでに絶対行ってみたい場所",
    "尊敬する偉人",
    "座右の銘、好きな言葉はあるか",
    "遅刻した時の言い訳",
    "浮気・不倫肯定派か否定派か",
    "好きな女性の仕草",
    "AIは社会にどのような影響を与えるか",
    "一番好きなジブリ作品",
    "今まで人に教えてもらった中で一番使えなさそうな知識",
    "年上が好きか年下が好きか",
    "後悔していること",
    "住んでみたい県、国",
    "今まで食べた中で一番感動した食べ物",
    "死ぬかと思った体験",
    "好きな鍋の具",
    "覚えてる一番古い記憶",
    "好きな牛丼チェーンとその理由",
    "自分を動物に例えると",
    "国語の教科書の中で好きだった話",
    "悟空とベジータはどっちが強いのか",
    "好きなパンツの色",
    "24時間営業は必要か",
    "新型コロナウィルスで損したこと",
    "オリンピックに追加したい種目",
    "16200円あったら何が出来るか"];

    var para = ()=>{
        var paraValue= talkList[getRandom(ADJUSTNUM,THEMENUM)];
        document.form1.text1.value=paraValue;
        paraflag = 1;
    }
    var paraslow = ()=>{
        clearTimeout(st);
        var paraValue= talkList[getRandom(ADJUSTNUM,THEMENUM)];
        document.form1.text1.value=paraValue;
        console.log("paraslow");
    }
    var parastop = ()=>{
        clearTimeout(ss);
        var paraValue= talkList[getRandom(ADJUSTNUM,THEMENUM)];
        document.form1.text1.value=paraValue;
        console.log("parastop");
    }
    
    
function getRandom( min, max ) {
        var random = Math.floor( Math.random() * (max + 1 - min) ) + min;
        return random;
}
/*
function closure(s){
    var start = s
    return start;
}
*/
//スタートを押すとルーレットが回り、再度押すと徐々に止まる
//function startRoulette1(){
function startRoulette(){
    if(flag==0){
        flag=1;
        document.form1.btn.value="ストップ";
        //allTalkList.push(start=setInterval('para()',50));
        start = setInterval('para()',50);
        //start = closure(setInterval('para()',50));
        console.log("paraflag = "+ paraflag);
        //return start;
    } else{
        flag=0;
        console.log(allTalkList.length);
        //clearInterval(allTalkList.shift());
        clearInterval(start);
        st = setTimeout('paraslow()',200);
        st=setTimeout('paraslow()',500);
        st=setTimeout('paraslow()',900);
        ss=setTimeout('parastop()',999);
        var paraValue = talkList[getRandom(ADJUSTNUM,THEMENUM)];
        document.form1.text1.value=paraValue;
        document.form1.btn.value="スタート";
    }
}
//var start = closure(startRoulette2());
//startRoulette2(start());

//}
//改善:アロー関数は処理が動的なのでslotStart関数の上に配置
//問題:ルーレットストップせず
//対策: getRandom関数をコールバックにしてみる
//どうする？: コールバックにしても改善されなさそう
//問題:とにかく終了しない
//対策: お手本のソースの終了条件を明確にする
//対策:
    //これまで:setIntervalを一つの変数に代入してclearしようとしていた。
    //これから:setIntervalは複数存在する(実行される度に増える)
            //ので、全てをclearしてやればいい
//できた！！
//なんで？：arrayがグローバルスコープだったから。
//結局スコープの問題だったぽい。なんだよチキショー。

//グローバルスコープを使わないでやってみたい。
//問題: if分岐は処理完了時に変数が消えてしまう
//対策:ネストして外側の関数に変数をおいて実行したら？
//結果:結局ネストしたものも消える
//対策:どうにかクロージャにぶち込む
//結果:無理っぽい諦めた。。
//対策:ネストしてクロージャ
//結果:外側での処理が猥雑になり、結局ネストしている関数でif分岐を使うしかなかった。
//ひとまず、諦めた。

