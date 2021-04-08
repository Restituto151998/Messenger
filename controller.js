// basic functionalities
var d = new Date()
function connectFunc() {
    console.log("Connecting to " + document.getElementById('broker').value);
    document.getElementById("connect").innerText = "Connecting....."
    // client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
    client = mqtt.connect(document.getElementById('broker').value)
    // console.log(document.getElementById('broker').value);

    client.on("connect", function () {
        console.log("Successfully connected to " + document.getElementById('broker').value);
        document.getElementById("connect").innerText = "Connected!"
        $("#connect").removeClass("btn-primary").addClass("btn-success")
        document.getElementById("subscribe").disabled = false;

    })


    client.on('message', function (topic,payload) {
        document.getElementById("table1").innerHTML += `<td>${payload}</td>`
    })


}

var pub_topic = document.getElementById("pub-topic");
var sub_topic = document.getElementById("sub-topic");
var pub_payload = document.getElementById("pub-payload")


function publishFunc() {
    if (sub_topic.value == pub_topic.value) {
       
        client.publish(pub_topic.value, pub_payload.value, d);
        document.getElementById("pub").innerHTML += `<td>${pub_payload.value}</td>`
    } else {
        client.publish(pub_topic.value, pub_payload.value, d);
        document.getElementById("pub").innerHTML += `<td>${pub_payload.value}</td>`
    }

}

function subscribeFunc() {
    if (sub_topic.value == pub_topic.value) {
        document.getElementById("pub-payload").disabled = false;
        document.getElementById("publish").disabled = false;
        client.subscribe(sub_topic.value, d)
        document.getElementById("sub").innerHTML += `<tr><td>${sub_topic.value}</td><td>${d.toDateString() + " " + d.toLocaleTimeString()}</td></tr>`
    } else {

    }
}
