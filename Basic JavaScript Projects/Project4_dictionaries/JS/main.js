function my_Dict() {                 //Key-Value pairs for a basketball player
    var Player = {
        Height: "6 feet 10 inches",
        Weight: 220,
        Position:  "Strong Forward",
        Team:  "Golden State Warriors",
    };
    delete Player.Team;
    document.getElementById("Dic").innerHTML = Player.Team;
}