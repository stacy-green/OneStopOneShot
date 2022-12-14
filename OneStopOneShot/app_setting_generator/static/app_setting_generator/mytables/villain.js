  
const events = [
        "The love of your young life died in your arms during a raider attack.", 
        "You bravely fought off several bandits as a young teenager.", 
        "You went into a series of ancient ruins on a dare and almost died — a family member or loved one saved you.", 
        "You went on a hunt with your village and landed the killing blow on a great beast.", 
        "While resting under a tree, a spirit appeared and talked to you.", 
        "Your village was ransacked by a group of strangers and most of the villagers were taken.", 
        "The Local Nobility took everything you had as “Tax”.", 
        "You used your powers to bully those in your village; eventually they rose up against you and you were exiled.", 
        "You came across a demon in your youth and battled it in a test of wills. Somehow you survived, but at what cost?", 
        "You were a loner and shunned in your village. Only a friendly ally stood by your side and eventually died defending your honour.", 
        "You have used your powers many times to protect your fellow villagers. The village considers you a hero.", 
        "You unknowingly entered the borders of a mysterious country or realm. Their peoples immediately arrested you.", 
        "You battled another great and powerful creature in your youth and won, but part of their consciousness somehow lingers within you.", 
        "Your family abandoned you in the wastes and local timberlands, but somehow you survived.", 
        "As a child you lost your temper and “accidentally” set fire to several of the houses in the village.", 
        "You travelled with a Ruin-Robber for a few years. The two of you discovered many interesting ancient ruins and trinkets during your travels.", 
        "Your seven sisters and five brothers were transformed into statues by a powerful mage after you angered them.", 
        "One of your loved ones was a brilliant mind and wrote any helpful stupendous articles and tomes on magic. Eventually they wronged a powerful mage and was killed in front of you.", 
        "You messed with one of your people's priceless artefacts and broke it. You have been exiled by your people for your crimes.", 
        "You joined an order of worshippers who believed they had a higher and more powerful calling. You found them far too extreme and have since left, however they still desire you to return to their fold.", 
        "You became possessed by a vile spirit and killed several innocent people. You have been attempting to atone ever since.", 
        "You used your powers to pull the life force out of a group of rampaging raiders. Even though you saved your fellow townsfolk, they are deathly afraid of you.", 
        "For a brief time you ruled over a small village of people, before being pushed out by a another.", 
        "You were forced by an influential person to use your powers to cause much harm to many people.", 
        "By using calm judgment and consulting with the spirits you were able to quell a feud between families that had been going on for generations.", 
        "You fell in a crevice and nearly died!", 
        "You became lost in your environment and called out for aid. A spirit heard your pleas and guided you out. Sometimes the spirit still comes to visit you.", 
        "After falling into a mud puddle, you slept for centuries. You killed the person that woke you and hid their body.", 
        "You fought off kidnappers who were attempting to take your loved ones.", 
        "While on a hunt you came across the lair of a dragon. It emerged, talked to you, and let you leave.", 
        "You won a championship fighting contest in your youth and are considered a celebrity in your tribe.", 
        "You were chased out of your village after causing too much trouble with your childish pranks.", 
        "You were imprisoned for a crime you didn't commit."
    ]

const fears = [
        "True Love. I fear true love, of being in the presence of a purity of emotional honesty that I will never know.", 
        "Famine. I have seen those who die by starvation, a death of indignity. I know how easily I too could suffer such a fate. It puts a sick feeling in my gut, one that is not easily remedied.", 
        "Deep Water. I fear the dark abyss of the Sea, the uncertainty of what lurks in those endless depths, and the writhing creatures beneath the waves that may seek to steal my soul.", 
        "The Wilderness. I fear the dark of the woods, for I have learned and made known of what dark things dwell within such places.", 
        "Cowardice. I fear being revealed a coward, that in some act of horror I will do what it is only natural and be forever shamed.", 
        "The Afterlife. I fear that upon my demise, however good or righteous it might be, that I will still be cast into the cruel and cold hands of an eternally alone and dark afterlife.", 
        "Loss of Control. I fear loss of my self, loss of my being; my face, my ego. I worked so hard to be notably myself, and to have this marred and invalidated, to look upon myself and not see me…that terrifies me deeply.", 
        "Undeath. I've witnessed the terrors of undeath, of spectres and skeletons, and so I fear my corpse may not stay motionless forever…"
    ]

const secrets = [
        "I have a Child I didn't raise.", 
        "I disposed of a Dagger that may have been evidence in a Murder.", 
        "I once sold out a friend for 100 Gold Pieces.", 
        "I have a mysterious illness I keep hidden from sight.", 
        "I'm addicted to Potions of all magical varieties.", 
        "I put my trust and faith in a Deity that is overtly evil.", 
        "I am writing a biography of my life, but embellishing it to make myself sound more heroic.", 
        "I'm technically not alive.", 
        "I lost several minor appendages due a gambling addition fuelled by a local moneylending gang.", 
        "I've been exiled twice under different names.", 
        "I'm nothing but a construct made from the flesh of a (in)famous local noble.", 
        "I was forced to watch my family's execution.", 
        "I'm the reincarnation of a legendary warrior, I swear!", 
        "I am the only surviving member of my previous adventuring party.", 
        "I have an irrational fear of cats.", 
        "I carry the skull of my best friend.", 
        "I hate the monarchy.", 
        "I fear that the Party will try to kill me if I leave or speak out of turn.", 
        "I was once imprisoned for my religious beliefs, but escaped under the cover of darkness.", 
        "I was raised as a hostage of my family's enemies after my parents refused to pay the ransom.", 
        "Never meant to be: I was rejected by a lover, one I thought truly loved me back.", 
        "Scorned by the Gods: The Gods have turned their back on the Mortal Realms and still cast shame upon those who fall to war and disease in their absence. I do not voice it openly, but this does not seem fair nor just.", 
        "Once a Criminal: I've engaged in theft before, I've even been caught. It was a low moment, but I'm bitter to how it colours my character.", 
        "Differing Thoughts: I was condemned by my order and masters in the past for daring to speak so openly on topics they deeply disagree with.", 
        "So Scandalous!: I was once part of a scandal within a noble city, the sort that follows a person and causes mockery when it does not cause death.", 
        "Luxurious Living: I dwelled for a time in hedonism and luxury, allowing good folk to die in my stead.", 
        "Stolen Alias: I steal valour from the dead.", 
        "Cursed!: I suffered from a terrible curse for many years, it ravaged my mind and ran ragged on my soul. I was freed only recently, and I fear what darkness I may have indulged in while under it.", 
        "The Replacement: I was replaced. I had been gone for a moment, recovering or just away like anyone should be allowed to be. I returned and I was replaced, so easily. They lavished praise upon my replacement, they claimed them better than I ever was. I fear my companions may do the same with me.", 
        "Twisted Mercy: I think the worst part about the tribesmen I fought was that they did not kill me. One grabbed me by the throat and screamed I wasn't fighting properly, that I wasn't giving it my all. That they knew I had a purpose, a power, and that if I wasn't going to fight to their joy, I may as well leave. To be given “mercy” by such wild peoples, I cannot stand for that mark on my honour."
    ]

const organizations = [
        "Powerful Organization (business, guild, etc)", 
        "Secret Society/Conspiracy", 
        "Cultists", 
        "Religious Fanatics", 
        "Foreign Nation", 
        "Thieves Guild", 
        "Gangs/Thugs", 
        "Spies, secret government agents.", 
        "Brainwashed/insane/mind-controlled group.", 
        "Hired muscle, mercenaries.", 
        "Misguided/evil locals", 
        "Angry Mob", 
        "Kidnappers/Slavers", 
        "Rebels", 
        "Terrorists", 
        "Mutants/outcasts", 
        "Witch-hunters", 
        "Invaders", 
        "Rival group of adventurers", 
        "Tribe/horde of orcs/goblins/kobolds/etc", 
        "Infestation", 
        "Spirits/Ghosts", 
        "Zombies", 
        "Vampires", 
        "Pirates", 
        "Ninjas"
    ]
    
const villainTypes = [
        "Assassin", 
        "Bounty Hunter", 
        "Criminal", 
        "Corrupt official", 
        "Crazy Scientist/Alchemist/Mage", 
        "Evil Wizard", 
        "Necromancer/lich", 
        "Religious Leader", 
        "Deadly Monster/Creature", 
        "Witch", 
        "Demon", 
        "Evil Machiavellian Mastermind", 
        "Your own employer", 
        "Your old mentor", 
        "Oppressive ruler", 
        "Brilliant Detective", 
        "Blackmailer", 
        "Military officer/general", 
        "Serial Killer", 
        "Noble/Lord", 
        "Misguided Former Hero", 
        "Organized Crime Boss", 
        "Powerful Businessman/Merchant", 
        "Fugitive/Criminal", 
        "Shaman", 
        "Trickster", 
        "Acolyte of a (dark god, demon, devil, old one, outsider)", 
        "Advisor to the (emperor, king, sultan, etc)", 
        "Alien Invader from another (dimension, plane of existence, world)", 
        "Alternate (dimension, history) version of hero", 
        "Being that has been imprisoned or in stasis for 100s to 1000s of years", 
        "Construct (body possessed by the villain, experiment of a mad mage or scientist, weapon from a bygone age)", 
        "Corrupted angel, hero, or priest / The Fallen", 
        "Demigod", 
        "Former teammate that everyone thought was dead", 
        "Next in line to be ruler", 
        "Possessed Hero or Priest"
    ]

const motivations = [
        "Romance: I want to marry the princess.", 
        "Revenge - ruin a hero: I want to ruin the King.", 
        "To distinguish oneself: I want the princess to respect me.", 
        "To fit in/gain acceptance: I want to attend the princess' coronation and eat at her table.", 
        "Justice: The king killed my mother, so the king must die.", 
        "Greed - get rich: I want to steal everything from the King's treasury.", 
        "Fear: I am afraid that our lands will be stripped bare by this evil king.", 
        "Desperation: If something doesn't change in the next week, I will be executed.", 
        "Social cohesion: Us zombies need to stick together.", 
        "Desire to better oneself: I was born a peasant, but I will die a king.", 
        "Power to achieve a goal: I must be king, so I can change the laws about owning property.", 
        "Escape destiny: At birth, a prophet said I would kill the king; however, I am stealing enough money to escape to another country and avoid that destiny.", 
        "Achieve destiny: At birth, a prophet said I would kill the king; and that's my plan.", 
        "Persecution: Growing up in a wheelchair has been hell.", 
        "Rivalry: Prince John wants to marry the Princess, but she's mine.", 
        "Discovery: I will find out the king's darkest secret and use it against him.", 
        "Ambition: I want. . . everything!", 
        "Survival (deliverance): In the midst of this civil war, I will survive.", 
        "Self-sacrifice: Someone must stop this evil king and I've decided to step up and do it.", 
        "Love: The princess has stolen my heart; so, I'll steal her.", 
        "Hate: The princess is an evil woman; when she becomes my wife, I'll make her suffer.", 
        "Conspiracy: I've gathered twelve good men to help me overthrow this king.", 
        "Honor: Men from my city never back down, even if it costs me everything.", 
        "Dishonor: Men from my city are idiots; I'll never do things the “right” way.", 
        "Unnatural affection: I want to marry the princess and take the queen as a lover.", 
        "Catastrophe: A volcano is going to erupt and when it does, I'll plunder the city.", 
        "Grief and loss: When my mother died, I lost all interest in doing good.", 
        "Rebellion: I'm the leader of the guerrilla forces.", 
        "Betrayal: I was engaged to the princess, and then she married Prince John.", 
        "Spread hate and fear: I love hate. Hate, hate, hate.", 
        "Corrupt everyone: Come join me as I rob the king.", 
        "Control the kids: If those kids make noise one more time at midnight, I'll get 'em.", 
        "Leave me in peace: I never wanted to leave my home town, but since you've made me, I'll show you what's what.", 
        "Recover what is lost: The king took my mother's locket as tribute, and if it's the last thing I ever do, I'll get it back.", 
        "Save humanity: To save humanity, I'll have to kill the whole army.", 
        "serve a master (ex. The Fuhrer): I'll follow King George anywhere, even if it means killing King Phillip.", 
        "Destroy: Ha! Ha! Ha! I love to burn down houses.", 
        "Rule part of the world: I want to be King of the Mermaids.", 
        "Rule all of the world: I will rule the Earth.",
        "Pride/Ego (Prove themselves to someone).", 
        "Greed (Gain Wealth).", 
        "Envy (Destroy their rival).", 
        "Political Power (Rule an organization/town/kingdom/world).", 
        "Magic Power.", 
        "Knowledge.", 
        "Gain Fame, Respect, Influence, Social Status.", 
        "Revenge (kill/hurt a person/people who harmed them or someone they loved).", 
        "Fear (Do whatever it takes to survive.)", 
        "Misguided sense of Justice", 
        "Hatred (of a person/group/class/race).", 
        "Love/Lust (Seduce a princess).", 
        "Amusement/Entertainment (hurt people for fun).", 
        "Cruelty, dark/violent urges.", 
        "Biological necessity (drink blood, eat people, rampage).", 
        "Following orders.", 
        "Competitive spirit, desire to win.", 
        "Fanatical Patriotism.", 
        "Freedom/liberty (escape their imprisonment/curse to roam free in the world again).", 
        "Eternal youth, immortality.", 
        "Resurrect their loved one.", 
        "Repay their debt to the devil.", 
        "Escape pursuit of the law.", 
        "Faith/Religion. (Resurrect an ancient evil or a god, make sacrifices to the higher power.)", 
        "Ensure the success of their business/organization by any means.", 
        "Spread chaos and mess with people.", 
        "Enforce the status quo / unjust laws.", 
        "Enforce the will of their gods.", 
        "Conquest. Conquer/enslave region.", 
        "Defeat their enemy.", 
        "Regain their honor (by committing deeds their father/family/clan will find 'worthy').", 
        "Get summoned/resurrected (escape from hell, get their servants to commit the ritual that will birth them into the world).", 
        "Complete some world altering task before their death.", 
        "Maintain the power/status they already possess.", 
        "Obsessive pursuit of a goal, anyone or anything that gets destroyed along the way is just collateral damage.", 
        "Resurrect their child/god/leader/master/teacher.", 
        "To cleanse the world of the inferior, non-believers, unworthy, etc.", 
        "To harden the people in preparation for some catastrophic event (real, imagined, prophesied) that is approaching.", 
        "Infamy. They seek to out do all other villains (past or present)."
    ]