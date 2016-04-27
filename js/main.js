var quotes = [
      "Look at that face?",
      "All of the women on The Apprentice flirted with me-consciously or unconsciously. That's to be expected.",
      "There is something on that birth certificate-maybe religion, maybe it says he's a Muslim, I don't know. Maybe he doesn't want that. Or, he may not have one.",
      "Our weak President, that kisses everybody's ass, is in more wars than I have ever seen. Now he's in Libya, he's in Afghanistan, he's in Iraq. Nobody respects us.",
      "If Hilary Clinton can't satisfy her husband what makes her think she can satisfy America?",
      "I will build a great, great wall on our southern border and I will make Mexico pay for that wall.",
      "An extremely credible source has called my office and told me that Barack Obama's birth certificate is a fraud.",
      "No more massive injections. Tiny children are not horses-one vaccine at a time, over time.",
      "There's nobody bigger or better at the military than I am.",
         
    ];

document.getElementById("changeQuote").addEventListener("click", function() {
    var q = quotes[ Math.floor( Math.random() * quotes.length ) ];
    document.getElementById("test").innerHTML = q;    
});




