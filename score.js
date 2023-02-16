// 질문리스트에 보여질 질문 객체로 문제 순서에 따라 각각 제목, 설명, 답변버튼, 답변에 해당하는 점수를 만들어 놓는다.

var testNum = {
  1: {
    title: "첫번째 문제",
    img: "img/Q1.png",
    desc: '다음 중 <span id="highlight">표준어가 아닌 것</span>은 <br>무엇일까요?',
    A: "머라고?",
    valueA: 0,
    B: "주작하다",
    valueB: 0,
    C: "꼽사리",
    valueC: 0,
    D: "괴랄하다",
    valueD: 7,
  },
  2: {
    title: "두번째 문제",
    img: "img/Q2.png",
    desc: '<span id="highlight">자동차에 가려진 숫자</span>는<br>무엇일까요?',
    A: 99,
    valueA: 0,
    B: 15,
    valueB: 0,
    C: 87,
    valueC: 10,
    D: 86,
    valueD: 0,
  },
  3: {
    title: "세번째 문제",
    img: "img/Q3.png",
    desc: '이 중 <span id="highlight">3장은 인공지능이 그렸습니다.</span><br>진짜 고양이는 몇 번일까요?',
    A: "A",
    valueA: 8,
    B: "B",
    valueB: 0,
    C: "C",
    valueC: 0,
    D: "D",
    valueD: 0,
  },
  4: {
    title: "네번째 문제",
    img: "img/Q4.png",
    desc: '<span id="highlight">100g당 칼로리가 가장 높은 음식</span>은<br>무엇일까요?',
    A: "A. 대창구이",
    valueA: 0,
    B: "B. 누텔라",
    valueB: 0,
    C: "C. 마라탕",
    valueC: 0,
    D: "D. 치즈스틱",
    valueD: 8,
  },
  5: {
    title: "다섯번째 문제",
    img: "img/Q5.png",
    desc: '다음 중 <span id="highlight">?에 해당하는 숫자</span>는<br>무엇일까요?',
    A: 1,
    valueA: 0,
    B: 2,
    valueB: 8,
    C: 3,
    valueC: 0,
    D: 4,
    valueD: 0,
  },
  6: {
    title: "여섯번째 문제",
    img: "img/Q6.png",
    desc: '다음 중 <span id="highlight">?에 해당하는 숫자</span>는<br>무엇일까요?',
    A: 9,
    valueA: 0,
    B: 4,
    valueB: 8,
    C: 8,
    valueC: 0,
    D: 6,
    valueD: 0,
  },
  7: {
    title: "일곱번째 문제",
    img: "img/Q7.png",
    desc: '다음 중 <span id="highlight">한자어가 아닌 것</span>은 <br>무엇일까요?',
    A: "A. 사이비",
    valueA: 0,
    B: "B. 반찬",
    valueB: 0,
    C: "C. 녹초",
    valueC: 9,
    D: "D. 호랑이",
    valueD: 0,
  },
  8: {
    title: "여덟번째 문제",
    img: "img/Q8.png",
    desc: '노벨평화상 <span id="highlight">후보에 오른 적이 없는<br>인물</span>은 누구일까요?',
    A: "A. 히틀러",
    valueA: 0,
    B: "B. 전두환",
    valueB: 0,
    C: "C. 마하트마 간디",
    valueC: 0,
    D: "D. 드록바",
    valueD: 8,
  },
  9: {
    title: "아홉번째 문제",
    img: "img/Q9.png",
    desc: '다음 중 <span id="highlight">?에 해당하는 숫자</span>는<br>무엇일까요?',
    A: 56,
    valueA: 0,
    B: 42,
    valueB: 9,
    C: 48,
    valueC: 0,
    D: 50,
    valueD: 0,
  },
  10: {
    title: "열번째 문제",
    img: "img/Q10.png",
    desc: '다음 중 <span id="highlight">인도말이 어원인 영어 단어는</span><br>무엇일까요?',
    A: "cafe",
    valueA: 0,
    B: "shampoo",
    valueB: 8,
    C: "menu",
    valueC: 0,
    D: "champion",
    valueD: 0,
  },
  11: {
    title: "열한번째 문제",
    img: "img/Q11.png",
    desc: '세계에서 <span id="highlight">가장 많이 쓰이는 이름</span>은<br>무엇일까요?',
    A: "데이비드",
    valueA: 0,
    B: "무하마드",
    valueB: 8,
    C: "킴(Kim)",
    valueC: 0,
    D: "핫산",
    valueD: 0,
  },
  12: {
    title: "열두번째 문제",
    img: "img/Q12.png",
    desc: '다음 중 <span id="highlight">?에 해당하는 숫자</span>는<br>무엇일까요?',
    A: 2,
    valueA: 0,
    B: 3,
    valueB: 0,
    C: 4,
    valueC: 9,
    D: 5,
    valueD: 0,
  },
};

// result라는 결과 객체를 json형태로 만들고 결과 유형에 따른 결과 타이틀과 결과에 대한 설명을 그에 맞게 넣어준다.
// A~J라는 타입 유형은 값을 전달하는데만 사용되므로 값은 바꿔도 좋으며, 변경할 때 아래 score 범위에 들어가는 타입 값도 반드시 함께 바꿔야 한다.

var result = {
  A: {
    explain:
      "약~간 낮은 점수를 받으셨네요?&#128546;<br>정말 안타깝게도 높은 점수는 아니지만...<br><br>다시 도전해서 높은 점수를 받고<br>친구에게 자랑해보세요..&#128580;",
    hint: "HINT: 주차장을 뒤집어 보시고,<br>숫자문제에서는 '구멍'을 찾아보세요<br>",
  },
  B: {
    explain: "퀴즈에 소질이 있으시네요!ㅋ&#128079;&#128079;&#128079;<br><br>다시 도전해서 높은 점수를 받고<br>친구에게 자랑해보세요",
    hint: "<br>HINT: 19세기 Mahomed&#128115;는 영국에서 인도식 사우나 'shampooing'을 개업했다고 합니다. <br>",
  },
  C: {
    explain: "너무 안타깝습니다..&#128546;<br><br>몇 개만 더 맞으면 좋을텐데<br>마지막으로 한 번만 더 도전해보세요!",
    hint: "<br>HINT: 기름에 튀긴 음식은<br>아무래도 칼로리가 높겠죠? &#128061;",
  },
  D: {
    explain: "호오.. 50점을 넘기다니 대단한데요?<br><br>어차피 50점만 넘겨도 대단한거니까<br>성공하신 셈 쳐드릴게요~!&#128586;",
    hint: "<br>HINT: '한국'에는 받침이 몇 개 있을까요?",
  },
  E: {
    explain: "와~! 나쁘지 않은 점수네요 &#128576;&#128576;<br><br>그래도 여기까지 왔으면<br>한 번은 더 도전해볼 수 있지 않을까요?",
    hint: "<br>HINT: 제가 키우는 고양이는 비닐봉지를 좋아해요",
  },
  F: {
    explain: "턱걸이 합격 축하드립니다~ !&#128079;&#128079;&#128079;<br><br>원래 80점 이상만 받으려고 했는...<br>아!! 아닙니다..!&#128517;",
    hint: "",
  },
  G: {
    explain: "거의 완벽에 가까운 점수!&#128079;&#128079;&#128079;<br><br>중국이 열을내고 일본이 뒤집어지며<br>전 세계가 한국을 주목한 당신의 점수!",
    hint: "",
  },
  H: {
    explain: "놀라운 점수입니다! 100점에 도전~?<br><br>세상이 뒤집어지고<br>모두가 경악한 놀라운 점수!",
    hint: "",
  },
  I: {
    explain: "사실 상 혼자 힘으로 얻을수 있는<br>최고득점입니다!<br><br>주변에 자랑해보세요!<br>친구들은 아마 30점도 못 맞을겁니다ㅋㅋㅋ&#128514;&#128514;",
    hint: "",
  },
  J: {
    explain:
      "비인간적인 스코어입니다. &#128548;<br><br>100점을 맞았다는 것은<br>문제 해설을 봤다는 것이겠죠?<br><br>진짜 100점을 맞으신거면...&#128563;<br>일단 커뮤니티로 와서 얘기하시죠",
    hint: "",
  },
};

// 테스트를 시작하는 함수
// testStart라는 변수를 만들고 #main의 내용이 보여지지 않고, 보여지지 않던 #test의 내용이 보여지도록 하는 내용을 넣는다.
var testStart = function () {
  document.querySelector("#main").style.display = "none";
  document.querySelector("#test").style.display = "block";
  sendEvent("startTest"); // 테스트 시작 데이터영역 실행
  next();
};

// #start_btn이라는 영역에 이벤트리스너를 넣고 click시 testStart를 작동하게 한다.
document.querySelector("#start_btn").addEventListener("click", testStart);

//#btnA 등 각각 답변 버튼 4개가 속한 영역를 뜻하는 변수로 만든다.
var selectA = document.querySelector("#btnA");
var selectB = document.querySelector("#btnB");
var selectC = document.querySelector("#btnC");
var selectD = document.querySelector("#btnD");

// 테스트 결과에 따른 합계점수를 넣을 score라는 변수를 만들고 초기 값은 0으로 설정한다.
var score = 0;
var count = 0;

// btnA라는 값이 들어간 div태그 id영역에 이벤트리스너를 넣고 클릭 시 아래와 같은 함수가 작동하게 한다.
// score라는 변수에 testNum[질문번호][질문번호와 버튼에 해당하는 점수]을 숫자형태로 더하고 next라는 함수가 작동한다.
document.querySelector("#btnA").addEventListener("click", function () {
  score += parseInt(testNum[i - 1]["valueA"]);
  if (testNum[i - 1]["valueA"] > 5) {
    count += 1;
  }
  answerQuestion(i - 1, "A"); // 정답 선택 데이터영역 실행
  next();
});

document.querySelector("#btnB").addEventListener("click", function () {
  score += parseInt(testNum[i - 1]["valueB"]);
  if (testNum[i - 1]["valueB"] > 5) {
    count += 1;
  }
  answerQuestion(i - 1, "B"); // 정답 선택 데이터영역 실행
  next();
});

document.querySelector("#btnC").addEventListener("click", function () {
  score += parseInt(testNum[i - 1]["valueC"]);
  if (testNum[i - 1]["valueC"] > 5) {
    count += 1;
  }
  answerQuestion(i - 1, "C"); // 정답 선택 데이터영역 실행
  next();
});

document.querySelector("#btnD").addEventListener("click", function () {
  score += parseInt(testNum[i - 1]["valueD"]);
  if (testNum[i - 1]["valueD"] > 5) {
    count += 1;
  }
  answerQuestion(i - 1, "D"); // 정답 선택 데이터영역 실행
  next();
});

// 문제 번호를 의미하는 변수 i를 생성한다.
// 이 후 답을 클릭할 때 변수 i에 1씩 숫자를 더해 질문번호가 넘어가고 그에 맞는 값을 가져오는 중요한 역할을 한다.
var i = 1;

// next라는 변수를 만들고 "다음 액션"에 대한 내용을 넣는다.
// 특히 문제가 총 10개로 기획되었기 떄문에 i == 11이 되면 #test 화면이 사라지고, #result 화면이 나타나는 것으로 시작한다.
// 그리고 10문제동안 득점한 score에 따라 각각 범위에 맞는 scoreRange를 얻는다.
// 이렇게 얻은 scoreRange는 결과에 따른 제목, 설명, 이미지 등을 노출할 때 중요한 역할을 한다.
var next = function () {
  if (i == 13) {
    document.querySelector("#test").style.display = "none";
    document.querySelector("#result").style.display = "block";
    if (score < 31) {
      var scoreRange = "A";
    } else if (score < 41) {
      var scoreRange = "B";
    } else if (score < 51) {
      var scoreRange = "C";
    } else if (score < 61) {
      var scoreRange = "D";
    } else if (score < 71) {
      var scoreRange = "E";
    } else if (score < 81) {
      var scoreRange = "F";
    } else if (score < 86) {
      var scoreRange = "G";
    } else if (score < 91) {
      var scoreRange = "H";
    } else if (score < 100) {
      var scoreRange = "I";
    } else if (score < 101) {
      var scoreRange = "J";
    }
    // 결과 도출 화면
    // #score부분에 들어가는 텍스트는 score에 쌓인 점수로 교체한다.
    // #result_title에는 결과 객체에서 scoreRange에 맞는 유형의 explain에 할당된 값이 대체되어 보여진다.
    document.querySelector("#score").innerHTML = "<br>" + score + "점";
    document.querySelector("#count").innerHTML = "정답 수: 12문제 중 " + count + "개";
    document.querySelector("#result_title").innerHTML = result[scoreRange]["explain"];
    document.querySelector("#result_explain").innerHTML = result[scoreRange]["hint"];

    // base64로 스코어 값 암호화
    var resultParams = btoa(score);
    var resultCounts = btoa(count);

    //url에 복호화된 score 값에 해당하는 쿼리 파라미터를 추가한다.
    history.replaceState({ data: "result" }, "", "?q=" + resultParams + "&p=" + resultCounts);

    resultEvent("viewResult", count, score); // 테스트 결과 데이터영역 실행
  } else {
    // i가 11보다 작은 수라면 변수 i에 따라 질문 리스트 내용이 변한다.
    // 변하는 항목은 문제번호, 진행상황 바, 질문 제목, 질문 설명, 버튼 설명이고 버튼 선택 후 i에 1만큼 더해진다.
    document.querySelector("#number").innerHTML = "문제번호 " + i + "/12";
    document.querySelector("#progress").style.width = (i / 12) * 100 + "%";
    document.querySelector("#title").innerHTML = testNum[i]["title"];
    document.querySelector("#desc").innerHTML = testNum[i]["desc"];
    document.querySelector("#img").setAttribute("src", testNum[i]["img"]);
    document.querySelector("#btnA").innerHTML = testNum[i]["A"];
    document.querySelector("#btnB").innerHTML = testNum[i]["B"];
    document.querySelector("#btnC").innerHTML = testNum[i]["C"];
    document.querySelector("#btnD").innerHTML = testNum[i]["D"];
    viewQuestion(i, testNum[i]["title"]); // 문제 보기 데이터영역 실행
    i++;
  }
};

// 다시 시작하기 함수
// retry라는 변수를 만들고 #result 내용이 사라지고, #test 내용이 나타나게 만든다.
// 이 때, i=1로 초기화하고, score는 =0으로 초기화한 다음 next(226행 참고) 함수를 실행시킨다.
var retry = function () {
  resultEvent("retryTest", count, score); // 테스트 재시작 데이터영역 실행
  document.querySelector("#result").style.display = "none";
  document.querySelector("#main").style.display = "block";
  i = 1;
  score = 0;
  count = 0;
  history.replaceState({ data: "retry" }, "", "/");
};
// #retry_btn에 이벤트리스너를 넣고 'click' 되었을 때 retry가 실행되도록 한다.
document.querySelector("#retry_btn").addEventListener("click", retry);

// 쿼리 파라미터 값이 있을 때 해당 결과 페이지로 바로가기
var shareQuery = new URL(location.href).searchParams.get("q");
var shareParam = new URL(location.href).searchParams.get("p");

if (new URL(location.href).searchParams.has("q") && new URL(location.href).searchParams.has("p") === true) {
  document.querySelector("#main").style.display = "none";
  document.querySelector("#result").style.display = "block";
  var score = atob(shareQuery);
  var count = atob(shareParam);
  if (score < 31) {
    var scoreRange = "A";
  } else if (score < 41) {
    var scoreRange = "B";
  } else if (score < 51) {
    var scoreRange = "C";
  } else if (score < 61) {
    var scoreRange = "D";
  } else if (score < 71) {
    var scoreRange = "E";
  } else if (score < 81) {
    var scoreRange = "F";
  } else if (score < 86) {
    var scoreRange = "G";
  } else if (score < 91) {
    var scoreRange = "H";
  } else if (score < 96) {
    var scoreRange = "I";
  } else if (score < 101) {
    var scoreRange = "J";
  }

  document.querySelector("#score").innerHTML = "<br>" + score + "점";
  document.querySelector("#count").innerHTML = "정답 수: 12문제 중 " + count + "개";
  document.querySelector("#result_title").innerHTML = result[scoreRange]["explain"];
  document.querySelector("#result_explain").innerHTML = result[scoreRange]["hint"];
}

var kakaoApiKey = "SDK 키 입력"; // 카카오 SDK API Key 입력
Kakao.init(kakaoApiKey);
Kakao.isInitialized();

// 카톡 공유 실행 함수
function kakaoShare() {
  var shareQuery = new URL(location.href).searchParams.get("q");
  var shareParam = new URL(location.href).searchParams.get("p");
  var kakaoTitle = "당신의 점수는 " + score + "점입니다.";
  var kakaoDesc = document.querySelector("#result_title").textContent;

  var imgUrl = "http://127.0.0.1:5500/img/thumb.png";
  var siteUrl = "http://127.0.0.1:5500/";
  var resultUrl = siteUrl + "?q=" + shareQuery + "&p=" + shareParam;
  var testUrl = siteUrl + "?utm_source=kakaotalk&utm_medium=social&utm_campaign=share_chat";

  Kakao.Share.sendDefault({
    objectType: "feed",
    content: {
      title: kakaoTitle,
      description: kakaoDesc,
      imageUrl: imgUrl,
      link: {
        mobileWebUrl: resultUrl,
        webUrl: resultUrl,
      },
    },
    buttons: [
      {
        title: "결과 확인",
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl,
        },
      },
      {
        title: "테스트하기",
        link: {
          mobileWebUrl: testUrl,
          webUrl: testUrl,
        },
      },
    ],
  });

  resultEvent("shareResult", count, score); // 카카오톡 공유 데이터영역 실행
}

document.querySelector("#share_btn").addEventListener("click", kakaoShare);
