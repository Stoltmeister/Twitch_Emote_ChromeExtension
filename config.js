var api_base_url = "https://api.frankerfacez.com/v1/";
var get_emotes_url =
  api_base_url + "emoticons?sort=count-desc?per_page=2000?_sceheme=https";
var all_emotes;
let checkApi = document.getElementById("checkApi");

checkApi.onclick = function() {
  var request = new XMLHttpRequest();

  request.open("GET", get_emotes_url), true;
  request.send();
  console.log(request.response.JSON);
  request.onload = function() {
    var response = JSON.parse(this.response);
    console.log(response);

    response = response.emoticons;

    response.forEach(emote => {
      all_emotes.push(emote);
    });
    console.log(all_emotes);
  };
};
