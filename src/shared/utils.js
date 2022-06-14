export const millisToMinutesAndSeconds = (millis) =>{
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

function* shuffle(array) {

    var i = array.length;

    while (i--) {
        yield array.splice(Math.floor(Math.random() * (i+1)), 1)[0];
    }

}
export const getRandomNumbers = (arr,limit) =>{
    var ranNums = shuffle(arr);
    let randoms = [];
    for(let i=0;i<limit;i++){
        randoms.push(ranNums.next().value)
    }
    return randoms;
}