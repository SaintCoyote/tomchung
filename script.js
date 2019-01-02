// variables ––––––––––––––––––––––––––––––––––––––––––––––––––

var displayNames = true;

// test object

var artist = {
	info: {
		name: {
			first:"Tom",
			middle:"Pu",
			last:"Chung",
			displayMiddle: false
		},
		birth: {
			year:"1989",
			city:"Trenton",
			state:"New Jersey",
			country:"United States",
			privacy: false
		},
		location: {
			city:"Anchorage",
			state:"Alaska",
			country:"United States",
			studio: {
				street: "3211 Providence Drive",
				city: "Anchorage",
				state: "AK",
				zip: "99508",
				privacy: true
			}
		},
		school:{
			mfa: {
				school:"Yale University",
				year:"2013"
			},
			bfa: {
				school:"San Francisco Art Institute",
				year:"2013",
			},
			privacy: false
		}
	},
	workAlt: [
		{
			title:"End of Everything",
			medium:"Oil and Acrylic on Canvas",
			height:"144",
			width:"216",
			increment:"inches",
			year:"2018"
		},{
			title:"End of Everything (Detail)",
			medium:"Oil and Acrylic on Canvas",
			height:"144",
			width:"216",
			increment:"in.",
			year:"2018"
		},{
			title:"End of Everything (Detail)",
			medium:"Oil and Acrylic on Canvas",
			height:"144",
			width:"216",
			increment:"in.",
			year:"2018"
		},{
			title:"Indras Net",
			medium:"Oil and Acrylic on Canvas",
			height:"62",
			width:"64",
			increment:"in.",
			year:"2017"
		},{
			title:"Indras Net (Detail)",
			medium:"Oil and Acrylic on Canvas",
			height:"62",
			width:"64",
			increment:"in.",
			year:"2017"
		}
	],
	work: [
		"Pu: I AM ASIAN",
		"2 Mothers",
		"\"Everything is Sacred\" Installation images<br>performance footage by Justin Fulkerson and Ed Eagerton",
		"\"Everything is Sacred\" Installation images<br>performance footage by Justin Fulkerson and Ed Eagerton",
		"\"Everything is Sacred\" Installation images<br>performance footage by Justin Fulkerson and Ed Eagerton",
		"\"Everything is Sacred\" Installation images<br>performance footage by Justin Fulkerson and Ed Eagerton",
		"\"Everything is Sacred\" Installation images<br>performance footage by Justin Fulkerson and Ed Eagerton",
		"\"Everything is Sacred\" Installation images<br>performance footage by Justin Fulkerson and Ed Eagerton",
		"",
		"",
		"",
		"",
		"",
		"",
		"End of Everything, Oil and Acrylic on Canvas, 144 x 216 in. 2018",
		"End of Everything (Detail)",
		"End of Everything (Detail)",
		"Indras Net, Oil and Acrylic on Canvas, 62 x 64 in. 2017",
		"Indras Net (Detail)",
		"Many Headed Beast (Work in Progress)",
		"The Trickster, Oil and Acrylic on Canvas, 134 x 68 in. 2017",
		"Mother, Oil and Acrylic on Canvas, 52 x 65 in. 2016",
		"Wedding Portrait for Mitchell, Acrylic on Canvas, 62 x 144 in. 2015",
		"Jagermeister Knight, Acrylic and Oil on Canvas, 60 x 86 in. 2015",
		"Everything, Oil and Acrylic on Canvas, 55 x 72 in. 2016",
		"Whale Graffiti, Oil on Canvas, 32 x 40 in. 2016",
		"Mother Nature Does Not love You, Oil and Acrylic on Fan, 65 x 50 in. 2016",
		"Cheetoh Raven, Oil on Canvas, 10 x 8 in. 2016",
		"Deer, Watercolor on Paper, 16 x 12 in. 2015",
		"Jawbone Study, Gouache on paper, 18 x 24 in. 2015 ",
		" Mouse Food, Acrylic on Canvas Panel, 48 x 24 in. 2016 Seal Mouth, Acrylic on Canvas Panel, 48 x 24 in. 2016 Talking Raven Acrylic on Canvas Panel, 48 x 24 in. 2016",
		"Eyes, Acrylic on Canvas, 24 x 12 in. 2016",
		"Teeth, Acrylic on Canvas, 24 x 12 in. 2016",
		"Paws, Acrylic on Canvas, 24 x 12 in. 2016",
		"Bones, Acrylic on Canvas, 24 x 12 in. 2016",
		"Young Handsome Guy Seeks Fishing Buddy, Watercolor on Paper, 23 x 28 in. 2014",
		"I Wish I Could Quit You, Acrylic on Canvas, 144 x 62 in. 2014",
		"I Wish I Could Quit You (Detail)",
		"I Wish I Could Quit You (Detail)",
		"Bear Boobs, Acrylic on Canvas, 62 x 144 in. 2014",
		"Bear Books (Detail)",
		"Gay Tooth",
		"From the Depths, Acrylic on Canvas, 144 x 62 in. 2014",
		"From the Depths (In Progress Detail)",
		"Highway 1, Watercolor on Paper, 23 x 28 in. 2014",
		"Falling Eagles, Acrylic on Canvas, 96 x 62 in. 2015",
		"I Really Caribou You, Acrylic on Canvas, 80 x 216 in. 2015",
		" Aquarius Acrylic on Canvas, 144 x 64 in. 2015",
		"Minotaur, Charcoal on paper, 23 x 29 in. 2015",
		"Jones Gallery Install Shot",
		"Jones Gallery Install Shot",
		"Ocean Front Property (Detail Shot)",
		"Ocean Front Property, Oil on Wood, 20.5 x 96 in. 2013",
		"Ocean Front Property (Detail Shot)",
		"Cheetoh Mandala",
		"Jellyfish Robe (Relic from Performance)",
		"Jellyfish Vials (Still from Film)",
		"Jellyfish Robe (Detail Shot)",
		"Jellyfish Robe (Detail Shot)",
		"Jellyfish Robe (Detail Shot)",
		"Remember What Happened to Captain Cook (Detail Shot)",
		"Remember What Happened to Captain Cook, Acrylic Mural 11 x 25 ft. 2014",
		"Remember What Happened to Captain Cook (Detail Shott)",
		"So Spiritual, Scratched Leaf, Dimensions Variable 2014",
		"So Spiritual, Scratched Leaf, Dimensions Variable 2014",
		"Little Blonde Girl, Mixed Media, Artifact from Performance 2014",
		"Little Blonde Girl (Detail Shot)",
		"Still from Performance 2012",
		"Cosmic Beast, Still from Performance 2012",
		"Cosmic Beast, Still from Performance 2012",
		"Creation Myth, Still from Performance 2012",
		"Creation Myth, Still from Performance 2012",
		"Birth of White Face Baby, Digital Photograph, 2012",
		"Seed Beed Cheeto Bag, Installation, 2013",
		"The Antidote, Digital Photograph, 2012",
		"Yale MFA 2013 Thesis Exhibition, Installation, 2013",
		"Yale MFA 2013 Thesis Exhibition, Installation, 2013",
		"Yale MFA 2013 Thesis Exhibition, Installation, 2013",
		"Yale MFA 2013 Thesis Exhibition, Installation, 2013",
		"Yale MFA 2013 Thesis Exhibition, Installation, 2013",
		"Yale MFA 2013 Thesis Exhibition, Installation, 2013",
		"Yale MFA 2013 Thesis Exhibition, Installation, 2013",
		"Yale MFA 2013 Thesis Exhibition, Installation, 2013",
		"Air Between a Drum, Cowhide and Wood 2012",
		"Air Between a Drum, Cowhide Wood 2012",
		"Air Between a Drum, Cowhide Wood 2012",
		"Shoot, Watercolor on Paper, 24 x 18 in. 2012",
		"Pocahontas, Oil paint on Bear Hide, 38 x 22 in. 2012",
		"G.I.'s Embrace, Oil on Canvas, 77 x 66 in. 2010",
		"Buddha Lapdance, Oil on Canvas, 64 x 84 in. 2010",
		"Facing the Hybrid, Oil on Canvas, 47 x 66 x in. 2010",
		"Asian Explosion, Oil on Canvas, 96 x 80 in. 2010"
	]
}


// script ––––––––––––––––––––––––––––––––––––––––––––––––––


loadNavbar();

loadImages();


// functions ––––––––––––––––––––––––––––––––––––––––––––––––––


function loadNavbar() {
	  $("body").prepend(
	  	'<nav class="t-nav2-container navbar navbar-default hidden-lg hidden-md hidden-sm">'
		+  '<div class="container-fluid" id="t-navbar-white">'
		+    '<div class="navbar-header">'
		+      '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">'
		+         '<span class="sr-only">Toggle navigation</span>'
		+         '<span class="icon-bar"></span>'
		+         '<span class="icon-bar"></span>'
		+         '<span class="icon-bar"></span>'
		+       '</button>'
		+       '<a class="navbar-brand container" href="index.html">Tom Chung</a>'
		+     '</div>'
		+     '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">'
		+       '<ul class="nav navbar-nav navbar-right">'
		+       	'<li><a href="index.html" id="t-nav-link-mobile">&nbsp; Home</a></li>'
		+       	'<li><a href="images.html" id="t-nav-link-mobile">&nbsp; Images</a></li>'
		+         '<li><a href="info.html" id="t-nav-link-mobile">&nbsp; Information</a></li>'
		+         '<li><a href="https://www.instagram.com/tomchungart/" id="t-nav-link-mobile">&nbsp; Instagram</a></li>'
		+       '</ul>'
		+     '</div>'
		+   '</div>'
		+ '</nav>'
  )
	
}

function loadImages() {
	for(i = artist.work.length; i > 0 ; i--){
		  $("#container").append(
		    "<a target='new' href='images/full/"
		    + (i)
		    + ".jpg'><img src='images/thumb/"
		    + (i)
		    + ".jpg'></a>"
			)
	    if (displayNames === true) {
		  $("#container").append(
		    "<p class='t-title-etc'>"
 			+ artist.work[artist.work.length-(i)]
 			+ "</p>"
	  		)
		} else {
		  $("#container").append(
 			"<br><br><br>"
 			)
	    }
	}
}

