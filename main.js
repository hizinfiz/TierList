var attributeShow = [0, 0, 0, 0, 0, 1];
var attributeList = [".strength", ".intelligence", ".willpower", ".agility", ".endurance", ".neutral"];
var dualAttributes = [[0, 1], [0, 2], [0, 3], [0, 4], [1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
var dualAttributesList = [".strint", ".strwil", ".stragi", ".strend", ".intwil", ".intagi", ".intend", ".wilagi", ".wilend", ".agiend"];
var rarityShow = [1, 0, 0, 0];
var rarityList = [".common", ".rare", ".epic", ".legendary"]

$('.attButton').on('click', function(){
    $(this).toggleClass("unclicked");
    var id = $(this).attr('id');
    if (id.charAt(0) === "A") {
        id = parseInt(id.substring(1));
        attributeShow[id] = (attributeShow[id] === 1) ? 0:1;
    } else {
        id = parseInt(id.substring(1));
        rarityShow[id] = (rarityShow[id] === 1) ? 0:1;
    }
    updateShowing();
});

function updateShowing(event) {
    var str = "";
    var num = [];
    // for single attribute cards
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 4; j++) {
            str = attributeList[i]+rarityList[j];
            if (attributeShow[i] === 1 && rarityShow[j] === 1) {
                $(str).show();
            } else {
                $(str).hide();
            }
        }
    }

    for (var i = 0; i < dualAttributes.length; i++) {
        for (var j = 2; j < 4; j++) {
            str = dualAttributesList[i]+rarityList[j];
            if (attributeShow[dualAttributes[i][0]] === 1 && attributeShow[dualAttributes[i][1]] === 1 && rarityShow[j] === 1) {
                $(str).show();                
            } else {
                $(str).hide();
            }
        }
    }
}

$(document).load(setTimeout(function() {
    // updateShowing();
    $('.card').hide();
    $('.common.neutral').show();
}, 200));