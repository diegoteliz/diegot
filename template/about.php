<?php require_once '../include/functions.php'; ?>
<section id="about">
	<article>
		<section id="bio">
			<figure id="diegoteliz">
				<img src="/img/diego-teliz.jpg" alt="." />
				<figcaption>
					<h1>Diego J. Téliz</h1>
					<h2><b>Full-Stack Developer</b></h2>
					<div class="separator-small"></div>
				</figcaption>
			</figure>
			<p>I'm Diego, a <?php echo get_years_old( '1991-03-24' ) ?> years old web developer and designer with <?php echo get_experience_years( '2008' ) ?> years of experience. I also have experience in mobile application development, 3D modeling, animation, networking and virtualization. I was born in Uruguay but I'm currently living in Auckland, New Zealand and working as Full-Stack Developer.</p>
			<p>When I'm working I give much importance to quality and details. I'm always researching and learning new technologies. My goal in every project is make a functional, user-friendly and innovative product. I love what I do and try to beat myself everyday.</p>
		</section>
		<section id="skills">
			<h1>Skill set</h1>
			<h2>"Yoda Master" Level</h2>
			<p>HTML5 / CSS3 / JavaScript / WordPress / Backbone.js / jQuery / Sass / Responsive Design / Fireworks / UI &amp; UX </p>
			<h2>"Obi-Wan" Level</h2>
			<p>PHP / MySQL / SEO / jQuery Mobile / Git / Gulp / Grunt / Handlebars / Nunjucks / Google Analytics / Email marketing / Illustrator / Photoshop / Flash / ActionScript</p>
			<h2>"Anakin Skywalker" Level</h2>
			<p>CoffeeScript / Node.js / Angular / React.js / SilverStripe / Prestashop / PhoneGap / Game development with Construt and Unity</p>
			<h2>Languages</h2>
			<p>Spanish (native) / English (intermediate) / Portuguese (intermediate)</p>
		</section>
		<section id="brands">
			<h1>I've worked for</h1>
			<ul id="brands-list"><!--
				--><li><img src="/img/brand/1.png" alt="National Geographic" title="National Geographic" /></li><!--
				--><li><img src="/img/brand/2.png" alt="Visa" title="Visa" /></li><!--
				--><li><img src="/img/brand/3.png" alt="DIRECTV" title="DIRECTV" /></li><!--
				--><li><img src="/img/brand/4.png" alt="Autodesk" title="Autodesk" /></li><!--
				--><li><img src="/img/brand/5.png" alt="GREY" title="GREY" /></li><!--
				--><li><img src="/img/brand/6.png" alt="Petrobras" title="Petrobras" /></li><!--
				--><li><img src="/img/brand/7.png" alt="Golf Channel" title="Golf Channel" /></li><!--
				--><li><img src="/img/brand/8.png" alt="Movistar" title="Movistar" /></li><!--
				--><li><img src="/img/brand/9.png" alt="Ancap" title="Ancap" /></li><!--
				--><li><img src="/img/brand/10.png" alt="HUB Brasil" title="HUB Brasil" /></li><!--
				--><li><img src="/img/brand/11.png" alt="Petersen Museum" title="Petersen Museum" /></li><!--
				--><li><img src="/img/brand/12.png" alt="Citibank" title="Citibank" /></li><!---->
			</ul>
		</section>
	</article>
</section>

<script type="text/javascript">
	require([], function(){
		$(document).attr({title:'Diego Téliz | About'});
		$('#dinamic-content').css({height: 'auto'});
	});
</script>