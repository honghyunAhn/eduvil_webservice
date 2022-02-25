const handleLikeClick = () => {
    const emotion = document.getElementsByName("emotion")[0];
    const autonomous = document.getElementsByName("autonomous")[0];
    const motivation = document.getElementsByName("motivation")[0];
    const time_management = document.getElementsByName("time_management")[0];
    const concentration = document.getElementsByName("concentration")[0];
    const reading = document.getElementsByName("reading")[0];
    const memorize = document.getElementsByName("memorize")[0];
    const test_management = document.getElementsByName("test_management")[0];
    const taking_note = document.getElementsByName("taking_note")[0];
    const focus = document.getElementsByName("focus")[0];
    if(emotion.value < 0 || emotion.value > 100 || isNaN(emotion.value) || emotion.value=="") {
        input_check(emotion);
        return false;
    }
    if(autonomous.value < 0 || autonomous.value > 100 || isNaN(autonomous.value) || autonomous.value=="") {
        input_check(autonomous);
        return false;
    }
    if(motivation.value < 0 || motivation.value > 100 || isNaN(motivation.value) || motivation.value=="") {
        input_check(motivation);
        return false;
    }
    if(time_management.value < 0 || time_management.value > 100 || isNaN(time_management.value) || time_management.value=="") {
        input_check(time_management);
        return false;
    }
    if(concentration.value < 0 || concentration.value > 100 || isNaN(concentration.value) || concentration.value=="") {
        input_check(concentration);
        return false;
    }
    if(reading.value < 0 || reading.value > 100 || isNaN(reading.value) || reading.value=="") {
        input_check(reading);
        return false;
    }
    if(memorize.value < 0 || memorize.value > 100 || isNaN(memorize.value) || memorize.value=="") {
        input_check(memorize);
        return false;
    }
    if(test_management.value < 0 || test_management.value > 100 || isNaN(test_management.value) || test_management.value=="") {
        input_check(test_management);
        return false;
    }
    if(taking_note.value < 0 || taking_note.value > 100 || isNaN(taking_note.value) || taking_note.value=="") {
        input_check(taking_note);
        return false;
    }
    if(focus.value < 0 || focus.value > 100 || isNaN(focus.value) || focus.value=="") {
        input_check(focus);
        return false;
    }
    return true;
}
const input_check = (str) => {
    let name = ""
    if(str.name == "emotion"){
        name = "정서"
    }
    if(str.name == "autonomous"){
        name = "자율"
    }
    if(str.name == "motivation"){
        name = "학습동기"
    }
    if(str.name == "time_management"){
        name = "시간관리"
    }
    if(str.name == "concentration"){
        name = "집중력"
    }
    if(str.name == "reading"){
        name = "독서능력"
    }
    if(str.name == "memorize"){
        name = "암기능력"
    }
    if(str.name == "test_management"){
        name = "시험관리"
    }
    if(str.name == "taking_note"){
        name = "노트필기"
    }
    if(str.name == "focus"){
        name = "수업집중"
    }
    alert(name+"을/를 0~100사이의 숫자로 입력해주세요");
    str.select();
    str.focus();
}