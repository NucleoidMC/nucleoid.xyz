+++
title = "Map Making"
date = 2021-05-01

extra.image = "assets/images/blog/mapmaking.png"
+++

Map Making 101

When a builder decides that they want to make a map, they first of all, head to our build server (Whitelisted for obvious reasons) found at <code>build.nucleoid.xyz</code>

They choose a game and create a map using a handy command.

<br>
<img class="header_image" src="https://iili.io/Kg34kl.jpg">

One of our builders is creating a [KotH (King of the Hill)](https://github.com/NucleoidMC/koth) map using [Plasmid](https://github.com/NucleoidMC/plasmid). Plasmid is a framework that allows our games to run, maps loaded and much much more. Its considered one of the main reasons why NucleoidMC isn't using bukkit or commonly bungeecord.

Plasmid allows our builders to access a <code>/map</code> command. The map command allows the swift creation of maps, editing, and exporting for use in production. 

Each map requires regions (Unless the game doesn't require any set regions) which can be configured using the <code>/map region</code> command.

For KotH, we require two vital regions:
<br><br>
- Spawn - Where the players will spawn after being knocked off or at the start of the game.

- Throne - Where the "top of the hill" is considered.

<br>

For showcase purposes, our builder has set the regions to visible:

<br>
<img class="header_image" src="https://iili.io/Kg3ZBe.png">

"But what do the colors mean?" you might say;
<br><br>
- Red - The bounding box, anything built outside this red cube will not be saved.
- Blue - Regions, as you can see, the lower region is the spawn and the topmost region is the throne.

<br>

By the looks of it, our builder has finished their map. 
All they need to do is run <code>/map export</code> and their map will be ready to download at [the file system found here.](https://build.nucleoid.xyz/plasmid/export)
