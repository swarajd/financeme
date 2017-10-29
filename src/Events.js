var scenario = Math.floor((Math.random() * 5) + 1);
var output = [];

function event() {
  switch (scenario) {
    case 1:
      console.log(bonus());
      break;
    case 2:
      console.log(negatives());
      break;
    case 3:
      console.log(tradeoffs());
      break;
    case 4:
      console.log(decisions());
      break;
    case 5:
      console.log(performance());
      break;
    default:
      console.log(output);
  }
}
//bonus
function bonus() {
  var x = Math.floor((Math.random() * 4) + 1);
  var bonusRock = 0;
  var outputText = "";
  var bonusJoy = 0;
  var decisionText = [];
  var promotionRock = 0;

  switch (x) {
    case 1:
      bonusRock = Math.floor((Math.random() * 100) + 50);
      outputText = bonusRock + " bonus? This rocks! (Gained " + bonusRock + " rocks.)";
      break;
    case 2:
      bonusRock = Math.floor((Math.random() * 100) + 50);
      outputText = "A friend gave you " + bonusRock + " rocks. Do not spend all in "
        + "one place. (Gained " + bonusRock + " rocks.)";
      break;
    case 3:
      bonusJoy = Math.floor((Math.random() * 10) + 5);
      outputText = "You got a compliment! That rocked your world. " +
        "(Gained " + bonusJoy + " joy.)";
      break;
    case 4:
      bonusRock = Math.floor((Math.random() * 100) + 50);
      bonusJoy = Math.floor((Math.random() * 10) + 5);
      outputText = "You won rock lottery. Solid stuff! " +
        "(Gained " + bonusRock + " rocks AND gained " + bonusJoy + " joy.)";
      break;
    default:
      outputText = "You rocked out of control!";
      bonusRock = -1;
      bonusJoy = -1;
  }

  output.push(outputText);
  output.push(bonusRock);
  output.push(bonusJoy);
  output.push(decisionText);
  output.push(promotionRock);
  return output;
}
//negatives
function negatives() {
  var x = Math.floor((Math.random() * 4) + 1);
  var bonusRock = 0;
  var outputText = "";
  var bonusJoy = 0;
  var decisionText = [];
  var promotionRock = 0;

  switch (x) {
    case 1:
      bonusRock = Math.floor((Math.random() * 100) + 50);
      bonusJoy = Math.floor((Math.random() * 10) + 5);
      outputText = "You took your health for granite. You need to go to the emergency room. " +
        "(Lose "+ bonusRock + " rocks AND " + bonusJoy + " joy.)";
      break;
    case 2:
      bonusRock = Math.floor((Math.random() * 100) + 50);
      outputText = "You igneous the consequences, your suit pants split and now you need new pants. " +
        "(Lose "+ bonusRock + " rocks.)";
      break;
    case 3:
      bonusRock = Math.floor((Math.random() * 100) + 50);
      bonusJoy = Math.floor((Math.random() * 10) + 5);
      outputText = "Oh my geode, the concert was cancelled. No rock refunds. " +
        "(Lose "+ bonusRock + " rocks AND " + bonusJoy + " joy.)";
      break;
    case 4:
      bonusRock = Math.floor((Math.random() * 100) + 50);
      outputText = "It seems cave security was not very concrete. " +
        "(Lose " + bonusRock + " rocks.)";
      break;
    default:
      outputText = "You rocked out of control!";
      bonusRock = -1;
      bonusJoy = -1;
  }

  output.push(outputText);
  output.push(-1 * bonusRock);
  output.push(-1 * bonusJoy);
  output.push(decisionText);
  output.push(promotionRock);
  return output;
}
//tradeoffs
function tradeoffs() {
  var x = Math.floor((Math.random() * 3) + 1);
  var bonusRock = 0;
  var outputText = "";
  var bonusJoy = 0;
  var decisionText = [];
  var promotionRock = 0;

  switch (x) {
    case 1:
      bonusRock = Math.floor((Math.random() * 100) + 100);
      bonusJoy = Math.floor((Math.random() * 10) + 10);
      outputText = "You can rock overtime. Sadder time but more rock. Is it worth? " +
        "(Get " + bonusRock + " rocks AND lose " + bonusJoy + " joy.)";
      output.push(outputText);
      output.push(bonusRock);
      output.push(-1 * bonusJoy);
      break;
    case 2:
      bonusRock = Math.floor((Math.random() * 100) + 100);
      bonusJoy = Math.floor((Math.random() * 10) + 10);
      outputText = "Time for vacation. You need time off. Go to rock and roll concert? " +
        "(Get " + bonusJoy + " joy AND lose " + bonusRock + " rocks.)";
      output.push(outputText);
      output.push(-1 * bonusRock);
      output.push(bonusJoy);
      break;
    case 3:
      bonusRock = Math.floor((Math.random() * 100) + 100);
      bonusJoy = Math.floor((Math.random() * 10) + 10);
      outputText = "Go on a gneiss rock date. " +
        "(Get " + bonusJoy + " joy AND lose " + bonusRock + " rocks.)";
      output.push(outputText);
      output.push(-1 * bonusRock);
      output.push(bonusJoy);
      break;
    default:
      outputText = "You rocked out of control!";
      bonusRock = -1;
      bonusJoy = -1;
  }

  decisionText.push("Yes");
  decisionText.push("No");

  output.push(decisionText);
  output.push(promotionRock);
  return output;
}
//decisions
function decisions() {
  var x = Math.floor((Math.random() * 3) + 1);
  var bonusRock = 0;
  var outputText = "";
  var bonusJoy = 0;
  var decisionText = [];
  var promotionRock = 0;
  switch (x) {
    case 1:
      bonusRock = Math.floor((Math.random() * 100) + 100);
      bonusJoy = Math.floor((Math.random() * 10) + 10);
      outputText = "Buy a new rocking chair or invest in the rock market?";
      decisionText.push("Gain " + bonusJoy + " joy.");
      decisionText.push("Gain " + bonusRock + " rocks.");
      output.push(outputText);
      output.push(bonusRock);
      output.push(bonusJoy);
      break;
    case 2:
      bonusRock = Math.floor((Math.random() * 100) + 100);
      bonusJoy = Math.floor((Math.random() * 10) + 10);
      outputText = "You lost rock coat, tough luck. Buy a new coat or catch a coal?";
      decisionText.push("Lose " + bonusJoy + " joy.");
      decisionText.push("Lose " + bonusRock + " rocks.");
      output.push(outputText);
      output.push(-1 * bonusRock);
      output.push(-1 * bonusJoy);
      break;
    case 3:
      bonusRock = Math.floor((Math.random() * 100) + 100);
      bonusJoy = Math.floor((Math.random() * 10) + 10);
      outputText = "Jackpot! Found pile of rocks! Find and return to the owner or keep the rocks?";
      decisionText.push("Gain " + bonusJoy + " joy.");
      decisionText.push("Gain " + bonusRock + " rocks.");
      output.push(outputText);
      output.push(bonusRock);
      output.push(bonusJoy);
      break;
    default:
      outputText = "You rocked out of control!";
      bonusRock = -1;
      bonusJoy = -1;
  }

  output.push(decisionText);
  output.push(promotionRock);
  return output;
}
//performance
function performance() {
  var x = Math.floor((Math.random() * 2) + 1);
  var bonusRock = 0;
  var outputText = "";
  var bonusJoy = 0;
  var decisionText = [];
  var promotionRock = 0;
  switch (x) {
    case 1:
      promotionRock = Math.floor((Math.random() * 150) + 100);
      outputText = "\"You work hard. Rock is hard. That makes you as good as rock.\" - Boss. " +
        "Get Promotion! " +
        "Now recieve " + promotionRock + " more rocks every two months.";
      output.push(outputText);
      output.push(bonusRock);
      output.push(bonusJoy);
      output.push(decisionText);
      output.push(promotionRock);
      break;

    case 2:
      promotionRock = Math.floor((Math.random() * 150) + 100);
      outputText = "\"You lack skill. You deserve less rocks.\" - Boss. " +
        "Get Demotion! " +
        "Now recieve " + promotionRock + " less rocks every two months.";
      output.push(outputText);
      output.push(bonusRock);
      output.push(bonusJoy);
      output.push(decisionText);
      output.push(-1 * promotionRock);
      break;
    default:
      outputText = "You rocked out of control!";
      bonusRock = -1;
      bonusJoy = -1;
  }

  return output;
}

event();
