let filmTxt = `
[
  {
    "filmLink": "https://www.youtube.com/embed/JFRM734sC5E?si=VLkRr4uphqLcD8Dd",
    "filmTitle": "The Night Bell",
    "filmBlurb": "This USC Thesis film was selected for screening at the 2018 Cannes 'Courte Métrage' Short Film Corner, the 2018 Action Latinx Life Showcase, the 2018 NFFTY National Film Festival for Talented Youth, and USC's 2018 First Look Festival.It was edited over four months on Avid and shot on a Sony F5. The story was reworked extensively in the edit, and features fluid morphing, rotoscoping, matte paintings and a visual effect in which frames from before and after the current frame are superimposed, then sped up or slowed down to meet the center frame."
  },
  {
    "filmLink": "https://www.youtube.com/embed/EX2hOOp2RxM?si=AFcuoT-SI38D2_80",
    "filmTitle": "Three Chen Sisters: Thanksgiving",
    "filmBlurb": "This web series episode won Best Comedy Short as the 2018 Silicon Beach Film Festival, Best Web Series at the 2018 Life After Life Film Festival, and was a semi-finalist at the 2018 LA Cinefest and an official selection at the 2018 Los Angeles IFS Film Festival.The coverage is  minimal, but the central scene, in which the mother critiques her daughters' boyfriends, required careful use of reaction shots to highlight the actors' comedic chops and the subtle conflict building between our protagonists as they compare each others' partners and compete for their mother's good graces."
  },
  {
    "filmLink": "https://www.youtube.com/embed/m-hpzak9FHk?si=Env39PueJPdUBX9R",
    "filmTitle": "Hope",
    "filmBlurb": "This USC 'Junior' 310 Thesis won Best Experimental Film at the 2016 Los Angeles Independent Film Festival and a Merit Award at the New York Film Festival. It needed only simple visual effects, and was shot on a basic Sony handicam. The story was reworked significantly in the edit for pacing and development of tension."
  },
  {
    "filmLink": "https://www.youtube.com/embed/Gco3GOTVOqA?si=i5BMPwrUuMzEwQAW",
    "filmTitle": "Big Dreams: Parks and Playgrounds",
    "filmBlurb": "This simple fundraising video raised about 10k for an ongoing project to refurbish the recreational amenities--the parks and playgrounds--of Tuolumne County for use by families with disabled children, and remains a project close-to-heart."
  }
]`;

let filmStuff = JSON.parse(filmTxt);
for(let i in filmStuff){
  document.getElementById("videos").innerHTML += 
    `
      <div class="col-xs-6 col-xs-offset-3">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" src="`+ filmStuff[i].filmLink +`"></iframe>
        </div>
        <h3 class="title"> `+ filmStuff[i].filmTitle +` </h3>
        <h5 class="description"> `+ filmStuff[i].filmBlurb +` </h5>
      </div>
    `
}
