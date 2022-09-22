
# OneStopOneShot

This is my capstone project for PDX Code Guild Full Stack Bootcamp. It makes use of Python/Django, JavaScript/Vue, and Html/Css. Some apps are more Vue heavy, some are more Django heavy. The idea was to incorporate each app with a different primary language/framework to show that I can use each one effectively. For example, the Map Generator is primarily Django and Python, the Antagonist Generator is primarily Vue, and the Encounter Builder puts everything together. The Encounter Builder in particular uses Vue to run functions in the background to calculate party size, EXP threshholds, and to populate an Html template for statblocks, as well as process fetch requests. It pulls this information from the Django database then responds with JSON, which is then manipulated again with Vue to create a reactive Html output.

## Introduction

TTRPGs have been increasing in popularity in recent years. At the crest of this wave is D&D 5e. Although there are countless resources for DMs to build sessions, they are scattered about the internet in various aggregators. One of the main problems that DMs encounter is scheduling, and what to do if players cancel last minute. 

I built this tool as a proof of concept for something to address this problem; this tool integrates several other tools to allow a DM to quickly and efficiently create a portfolio for single session play. All monster resources are sourced from the DM Basic Rules provided by Wizards of the Coast. The database is populated with every officially published monster, but only those in the DM Basic Rules are available for use within the app.

## Functionality
- Generator for antagonist/villain
- Generator for encounters
- Generator for maps

### Villain generator

The antagonist/villain generator creates a profile including their background, motives, personality, flaws, etc. The idea is to build a robust antagonist to explain why there are monsters in the dungeon to begin with, and to give an idea for a mission. Users can enter their own fields or randomly roll on a table for each. 

All rollable tables came from either https://5e.tools/, http://dnd5e.wikidot.com/, were posted on reddit by u/RamonDozol at https://www.reddit.com/r/DnD5e/comments/mc5r2v/table_of_personality_traits/, were posted by Darcy Pattison on her website https://www.darcypattison.com/writing/revision/villain-motivations/, were posted on reddit by u/lumenwrites at https://www.reddit.com/r/d100/comments/hsxbz9/lists_of_100_villains_evil_organizations_evil/, were posted by Harry on https://blackcitadelrpg.com/group-patrons-5e/, or were sourced from https://creativerogues.tumblr.com/post/631529713014374400/1d20-dark-secrets-your-dd-character-would-prefer.

### Encounter generator

The encounter generator is a dumbed down version of Kobold Plus Fight Club. It allows the user to create and save parties, display EXP goals, and add monsters to encounters based on those goals. It also uses a modified statblock from https://tetra-cube.com/dnd/dnd-statblock. I had to refactor the entire thing for styling and use with a Vue app, but the basic structure is the same. Finally, I populated my monster database with a csv file from https://5e.tools/. However, I limited the availability of monsters to which ones were outlined in the DM Basic Rules made publicly available Wizards of the Coast.

### Map generator

The maps were downloaded from https://donjon.bin.sh/5e/dungeon/.

# For more information

For more information, check out the project proposal