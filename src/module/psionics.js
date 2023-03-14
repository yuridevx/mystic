export const psionics = [
  {
    name: 'Adaptive Body',
    source: 'UATheMysticClass',
    page: 10,
    type: 'D',
    order: 'Immortal',
    entries: [
      'You can alter your body to match your surroundings, allowing you to withstand punishing environments. With greater psi energy, you can extend this protection to others.',
    ],
    focus:
      "While focused on this discipline, you don't need to eat, breathe, or sleep. To gain the benefits of a long rest, you can spend 8 hours engaged in light activity, rather than sleeping during any of it.",
    modes: [
      {
        cost: {
          min: 2,
          max: 2,
        },
        name: 'Environmental Adaptation',
        entries: [
          'As an action, you or a creature you touch ignores the effects of extreme heat or cold (but not cold or fire damage) for the next hour.',
        ],
      },
      {
        cost: {
          min: 3,
          max: 3,
        },
        name: 'Adaptive Shield',
        entries: [
          'When you take acid, cold, fire, lightning, or thunder damage, you can use your reaction to gain resistance to damage of that type\u2014including the triggering damage\u2014until the end of your next turn.',
        ],
      },
      {
        cost: {
          min: 5,
          max: 5,
        },
        concentration: {
          duration: 1,
          unit: 'hr',
        },
        name: 'Energy Adaptation',
        entries: [
          'As an action, you can touch one creature and give it resistance to acid, cold, fire, lightning, or thunder damage (your choice), which lasts until your {@status concentration} ends.',
        ],
      },
      {
        cost: {
          min: 7,
          max: 7,
        },
        concentration: {
          duration: 1,
          unit: 'hr',
        },
        name: 'Energy Immunity',
        entries: [
          'As an action, you can touch one creature and give it immunity to acid, cold, fire, lightning, or thunder damage (your choice), which lasts until your {@status concentration} ends.',
        ],
      },
    ],
  },
  {
    name: 'Aura Sight',
    source: 'UATheMysticClass',
    page: 10,
    type: 'D',
    order: 'Awakened',
    entries: [
      "You refocus your sight to see the energy that surrounds all creatures. You perceive auras, energy signatures that can reveal key elements of a creature's nature.",
    ],
    focus: 'While focused on this discipline, you have advantage on Wisdom ({@skill Insight}) checks.',
    modes: [
      {
        cost: {
          min: 2,
          max: 2,
        },
        name: 'Assess Foe',
        entries: [
          'As a bonus action, you analyze the aura of one creature you see. You learn its current hit point total and all its immunities, resistances, and vulnerabilities.',
        ],
      },
      {
        cost: {
          min: 2,
          max: 2,
        },
        name: 'Read Moods',
        entries: [
          'As a bonus action, you learn a one-word summary of the emotional state of up to six creatures you can see, such as happy, confused, afraid, or violent.',
        ],
      },
      {
        cost: {
          min: 3,
          max: 3,
        },
        concentration: {
          duration: 1,
          unit: 'hr',
        },
        name: 'View Aura',
        entries: [
          "As an action, you study one creature's aura. Until your {@status concentration} ends, while you can see the target, you learn if it's under the effect of any magical or psionic effects, its current hit point total, and its basic emotional state. While this effect lasts, you have advantage on Wisdom ({@skill Insight}) and Charisma checks you make against it.",
        ],
      },
      {
        cost: {
          min: 5,
          max: 5,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Perceive the Unseen',
        entries: [
          'As a bonus action, you gain the ability to see auras even of {@condition invisible} or hidden creatures. Until your {@status concentration} ends, you can see all creatures, including hidden and {@condition invisible} ones, regardless of lighting conditions.',
        ],
      },
    ],
  },
  {
    name: 'Beacon',
    source: 'UATheMysticClass',
    page: 27,
    type: 'T',
    entries: [
      'As a bonus action, you cause bright light to radiate from your body in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. The light lasts for 1 hour, and you can extinguish it earlier as a bonus action.',
    ],
  },
  {
    name: 'Bestial Form',
    source: 'UATheMysticClass',
    page: 11,
    type: 'D',
    order: 'Immortal',
    entries: ['You transform your body, gaining traits of different beasts.'],
    focus: 'While focused on this discipline, you have advantage on Wisdom ({@skill Animal Handling}) checks.',
    modes: [
      {
        cost: {
          min: 1,
          max: 7,
        },
        name: 'Bestial Claws',
        entries: [
          'You manifest long claws for an instant and make a melee weapon attack against one creature within 5 feet of you. On a hit, this attack deals {@scaledamage 1d10|1-7|1d10|psi} slashing damage per psi point spent.',
        ],
      },
      {
        name: 'Bestial Transformation',
        entries: [
          'As a bonus action, you alter your physical form to gain different characteristics. When you use this ability, you can choose one or more of the following effects. Each effect has its own psi point cost. Add them together to determine the total cost. This transformation lasts for 1 hour, until you die, or until you end it as a bonus action.',
        ],
        submodes: [
          {
            cost: {
              min: 2,
              max: 2,
            },
            name: 'Amphibious',
            entries: ['You gain gills; you can breathe air and water.'],
          },
          {
            cost: {
              min: 2,
              max: 2,
            },
            name: 'Climbing',
            entries: ['You grow tiny hooked claws that give you gain a climbing speed equal to your walking speed.'],
          },
          {
            cost: {
              min: 5,
              max: 5,
            },
            name: 'Flight',
            entries: ['Wings sprout from your back. You gain a flying speed equal to your walking speed.'],
          },
          {
            cost: {
              min: 2,
              max: 2,
            },
            name: 'Keen Senses',
            entries: [
              'Your eyes and ears become more sensitive. You gain advantage on Wisdom ({@skill Perception}) checks.',
            ],
          },
          {
            cost: {
              min: 3,
              max: 3,
            },
            name: 'Perfect Senses',
            entries: [
              'You gain a keen sense of smell and an instinct to detect prey. You can see {@condition invisible} creatures and objects within 10 feet of you, even if you are {@condition blinded}.',
            ],
          },
          {
            cost: {
              min: 2,
              max: 2,
            },
            name: 'Swimming',
            entries: [
              'You gain fins and webbing between your fingers and toes; you gain a swimming speed equal to your walking speed.',
            ],
          },
          {
            cost: {
              min: 2,
              max: 2,
            },
            name: 'Tough Hide',
            entries: ['Your skin becomes as tough as leather; you gain a +2 bonus to AC.'],
          },
        ],
      },
    ],
  },
  {
    name: 'Blade Meld',
    source: 'UATheMysticClass',
    page: 27,
    type: 'T',
    entries: [
      "As a bonus action, a one-handed melee weapon you hold becomes one with your hand. For the next minute, you can't let go of the weapon nor can it be forced from your grasp.",
    ],
  },
  {
    name: 'Blind Spot',
    source: 'UATheMysticClass',
    page: 27,
    type: 'T',
    entries: [
      'As an action, you erase your image from the mind of one creature you can see within 120 feet of you; the target must succeed on a Wisdom saving throw, or you are {@condition invisible} to it until the end of your next turn.',
    ],
  },
  {
    name: 'Brute Force',
    source: 'UATheMysticClass',
    page: 11,
    type: 'D',
    order: 'Immortal',
    entries: [
      'You augment your natural strength with psionic energy, granting you the ability to achieve incredible feats of might.',
    ],
    focus: 'While focused on this discipline, you have advantage on Strength ({@skill Athletics}) checks',
    modes: [
      {
        cost: {
          min: 1,
          max: 7,
        },
        name: 'Brute Strike',
        entries: [
          'As a bonus action, you gain a bonus to your next damage roll against a target you hit with a melee attack during the current turn. The bonus equals +{@scaledamage 1d6|1-7|1d6|psi} per psi point spent, and the bonus damage is the same type as the attack. If the attack has more than one damage type, you choose which one to use for the bonus damage.',
        ],
      },
      {
        cost: {
          min: 1,
          max: 7,
        },
        name: 'Knock Back',
        entries: [
          'When you hit a target with a melee attack, you can activate this ability as a reaction. The target must succeed on a Strength saving throw or be knocked 10 feet away from you per psi point spent. The target moves in a straight line. If it hits an object, this movement immediately ends and the target takes {@scaledamage 1d6|1-7|1d6|psi} bludgeoning damage per psi point spent.',
        ],
      },
      {
        cost: {
          min: 1,
          max: 7,
        },
        name: 'Mighty Leap',
        entries: ['As part of your movement, you jump in any direction up to 20 feet per psi point spent.'],
      },
      {
        cost: {
          min: 2,
          max: 2,
        },
        name: 'Feat of Strength',
        entries: ['As a bonus action, you gain a +5 bonus to Strength checks until the end of your next turn.'],
      },
    ],
  },
  {
    name: 'Celerity',
    source: 'UATheMysticClass',
    page: 12,
    type: 'D',
    order: 'Immortal',
    entries: [
      'You channel psionic power into your body, honing your reflexes and agility to an incredible degree. The world seems to slow down while you continue to move as normal.',
    ],
    focus: 'While focused on this discipline, your walking speed increases by 10 feet.',
    modes: [
      {
        cost: {
          min: 1,
          max: 7,
        },
        name: 'Rapid Step',
        entries: [
          'As a bonus action, you increase your walking speed by 10 feet per psi point spent until the end of the current turn. If you have a climbing or swimming speed, this increase applies to that speed as well.',
        ],
      },
      {
        cost: {
          min: 2,
          max: 2,
        },
        name: 'Agile Defense',
        entries: ['As a bonus action, you take the Dodge action.'],
      },
      {
        cost: {
          min: 2,
          max: 2,
        },
        name: 'Blur of Motion',
        entries: [
          'As an action, you cause yourself to be {@condition invisible} during any of your movement during the current turn.',
        ],
      },
      {
        cost: {
          min: 2,
          max: 2,
        },
        name: 'Surge of Speed',
        entries: [
          "As a bonus action, you gain two benefits until the end of the current turn: you don't provoke opportunity attacks, and you have a climbing speed equal to your walking speed.",
        ],
      },
      {
        cost: {
          min: 5,
          max: 5,
        },
        name: 'Surge of Action',
        entries: ['As a bonus action, you can Dash or make one weapon attack.'],
      },
    ],
  },
  {
    name: 'Corrosive Metabolism',
    source: 'UATheMysticClass',
    page: 12,
    type: 'D',
    order: 'Immortal',
    entries: ['Your control over your body allows you to deliver acid or poison attacks.'],
    focus: 'While focused on this discipline, you have resistance to acid and poison damage',
    modes: [
      {
        cost: {
          min: 1,
          max: 7,
        },
        name: 'Corrosive Touch',
        entries: [
          'As an action, you deliver a touch of acid to one creature within your reach. The target must make a Dexterity saving throw, taking {@scaledamage 1d10|1-7|1d10|psi} acid damage per psi point spent on a failed save, or half as much damage on a successful one.',
        ],
      },
      {
        cost: {
          min: 1,
          max: 7,
        },
        name: 'Venom Strike',
        entries: [
          "As an action, you create a poison spray that targets one creature you can see within 30 feet of you. The target must make a Constitution saving throw. On a failed save, it takes {@scaledamage 1d6|1-7|1d6|psi} poison damage per psi point spent and is {@condition poisoned} until the end of your next turn. On a successful save, the target takes half as much damage and isn't {@condition poisoned}.",
        ],
      },
      {
        cost: {
          min: 2,
          max: 2,
        },
        name: 'Acid Spray',
        entries: [
          'As a reaction when you take piercing or slashing damage, you cause acid to spray from your wound; each creature within 5 feet of you takes {@damage 2d6} acid damage.',
        ],
      },
      {
        cost: {
          min: 5,
          max: 5,
        },
        name: 'Breath of the Black Dragon',
        entries: [
          'You exhale a wave of acid in a 60-foot line that is 5 feet wide. Each creature in the line must make a Constitution saving throw, taking {@damage 6d6} acid damage on a failed save, or half as much on a successful one. You can increase the damage by {@scaledamage 6d6|5-7|1d6|psi} per additional psi point spent on it.',
        ],
      },
      {
        cost: {
          min: 7,
          max: 7,
        },
        name: 'Breath of the Green Dragon',
        entries: [
          'You exhale a cloud of poison in a 90-foot cone. Each creature in the line must make a Constitution saving throw, taking {@damage 10d6} poison damage on a failed save, or half as much damage on a successful one.',
        ],
      },
    ],
  },
  {
    name: 'Crown of Despair',
    source: 'UATheMysticClass',
    page: 12,
    type: 'D',
    order: 'Avatar',
    entries: [
      "You have learned to harvest seeds of despair in a creature's psyche, wracking it with self-doubt and inaction.",
    ],
    focus: 'While focused on this discipline, you have advantage on Charisma ({@skill Intimidation}) checks.',
    modes: [
      {
        cost: {
          min: 1,
          max: 7,
        },
        name: 'Crowned in Sorrow',
        entries: [
          "As an action, one creature you can see within 60 feet of you must make a Charisma saving throw. On a failed save, it takes {@damage 1d8} psychic damage per psi point spent, and it can't take reactions until the start of its next turn. On a successful save, it takes half as much damage.",
        ],
      },
      {
        cost: {
          min: 2,
          max: 2,
        },
        concentration: {
          duration: 10,
          unit: 'min',
        },
        name: 'Call to Inaction',
        entries: [
          'If you spend 1 minute conversing with a creature, you can attempt to seed it with overwhelming ennui. At the end of the minute, you can use an action to force the creature to make a Wisdom saving throw. The save automatically succeeds if the target is immune to being {@condition charmed}. On a failed save, it sits and is {@condition incapacitated} until your {@status concentration} ends. This effect immediately ends if the target or any ally it can see is attacked or takes damage. On a successful save, the creature is unaffected and has no inkling of your attempt to bend its will.',
        ],
      },
      {
        cost: {
          min: 3,
          max: 3,
        },
        name: 'Visions of Despair',
        entries: [
          'As an action, you force one creature you can see within 60 feet of you to make a Charisma saving throw. On a failed save, it takes {@damage 3d6} psychic damage, and its speed is reduced to 0 until the end of its next turn. On a successful save, it takes half as much damage. You can increase the damage by {@scaledamage 3d6|3-7|1d6|psi} per additional psi point spent on it.',
        ],
      },
      {
        cost: {
          min: 5,
          max: 5,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Dolorous Mind',
        entries: [
          'As an action, you choose one creature you can see within 60 feet of you. It must succeed on a Charisma saving throw, or it is {@condition incapacitated} and has a speed of 0 until your {@status concentration} ends. It can repeat this saving throw at the end of each of its turns, ending the effect on itself on a success.',
        ],
      },
    ],
  },
  {
    name: 'Crown of Disgust',
    source: 'UATheMysticClass',
    page: 13,
    type: 'D',
    order: 'Avatar',
    entries: ['You cause a creature to be flooded with emotions of disgust.'],
    focus:
      "While you are focused on this discipline, the area in a 5 foot radius around you is {@quickref difficult terrain||3} for any enemy that isn't immune to being {@condition frightened}.",
    modes: [
      {
        cost: {
          min: 1,
          max: 7,
        },
        name: 'Eye of Horror',
        entries: [
          "As an action, choose one creature you can see within 60 feet of you. The target must make a Charisma saving throw. On a failed save, it takes {@scaledamage 1d6|1-7|1d6|psi} psychic damage per psi point spent and can't move closer to you until the end of its next turn. On a successful save, it takes half as much damage.",
        ],
      },
      {
        cost: {
          min: 3,
          max: 3,
        },
        concentration: {
          duration: 10,
          unit: 'min',
        },
        name: 'Wall of Repulsion',
        entries: [
          "As an action, you create an invisible, insubstantial wall of energy within 60 feet of you that is up to 30 feet long, 10 feet high, and 1 foot thick. The wall lasts until your {@status concentration} ends. Any creature attempting to move through it must make a Wisdom saving throw. On a failed save, a creature can't move through the wall until the start of its next turn. On a successful save, the creature can pass through it. A creature must make this save whenever it attempts to pass through the wall, whether willingly or unwillingly.",
        ],
      },
      {
        cost: {
          min: 5,
          max: 5,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Visions of Disgust',
        entries: [
          'You cause a creature to regard all other beings as horrid, alien entities. As an action, choose one creature you can see within 60 feet of you. The target must make a Wisdom saving throw. On a failed save, it takes {@damage 5d6} psychic damage, and until your {@status concentration} ends, it takes {@damage 1d6} psychic damage per creature within 5 feet of it at the end of each of its turns. On a successful save, the target takes only half the initial damage and suffers none of the other effects.',
        ],
      },
      {
        cost: {
          min: 7,
          max: 7,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'World of Horror',
        entries: [
          "As an action, choose up to six creatures within 60 feet of you. Each target must make a Charisma saving throw. On a failed save, a target takes {@damage 8d6} psychic damage, and it is {@condition frightened} until your {@status concentration} ends. On a successful save, a target takes half as much damage. While {@condition frightened} by this effect, a target's speed is reduced to 0, and the target can use its action, and any bonus action it might have, only to make melee attacks. The {@condition frightened} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        ],
      },
    ],
  },
  {
    name: 'Crown of Rage',
    source: 'UATheMysticClass',
    page: 13,
    type: 'D',
    order: 'Avatar',
    entries: [
      "You place a mote of pure fury within a creature's mind, causing its bloodlust to overcome its senses and for it to act as you wish it to.",
    ],
    focus:
      'While you are focused on this discipline, any enemy within 5 feet of you that makes a melee attack roll against creatures other than you does so with disadvantage',
    modes: [
      {
        cost: {
          min: 1,
          max: 7,
        },
        name: 'Primal Fury',
        entries: [
          'As an action, choose one creature you can see within 60 feet of you. The target must succeed on a Charisma saving throw or take {@scaledamage 1d6|1-7|1d6|psi} psychic damage per psi point spent on this ability and immediately use its reaction to move its speed in a straight line toward its nearest enemy. The save automatically succeeds if the target is immune to being {@condition charmed}.',
        ],
      },
      {
        cost: {
          min: 2,
          max: 2,
        },
        concentration: {
          duration: 10,
          unit: 'min',
        },
        name: 'Fighting Words',
        entries: [
          'If you spend 1 minute conversing with a creature, you can attempt to leave a simmering violence in its mind. At the end of the minute, you can use an action to force the creature to make a Wisdom saving throw to resist feeling violent urges against one creature you describe to it or name. The save automatically succeeds if the target is immune to being {@condition charmed}. On a failed save, the target attacks the chosen creature if it sees that creature before your {@status concentration} ends, using weapons or spells against a creature it was already hostile toward or unarmed strikes against an ally or a creature it was neutral toward. Once the fight starts, it continues to attack for 5 rounds before this effect ends. This effect immediately ends if the target or any ally it can see is attacked or takes damage from any creature other than the one it has been incited against. On a successful save, the creature is unaffected and has no inkling of your attempt to bend its will.',
        ],
      },
      {
        cost: {
          min: 2,
          max: 2,
        },
        name: 'Mindless Courage',
        entries: [
          "You cause a creature's bloodlust to overcome its sense of preservation. As a bonus action, choose one creature you can see within 60 feet of you. The target must succeed on a Wisdom saving throw or, until the end of your next turn, it can't willingly move unless its movement brings it closer to its nearest enemy that it can see. The save automatically succeeds if the target is immune to being {@condition charmed}.",
        ],
      },
      {
        cost: {
          min: 5,
          max: 5,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Punishing Fury',
        entries: [
          "You cause a creature's rage to grow so hot that it attacks without heeding its own safety. As a bonus action, choose one creature you can see within 60 feet of you. The target must succeed on a Wisdom saving throw or, until your {@status concentration} ends, any creature within 5 feet of it can use a reaction to make a melee attack against it whenever the target makes a melee attack. The save automatically succeeds if the target is immune to being {@condition charmed}.",
        ],
      },
    ],
  },
  {
    name: 'Delusion',
    source: 'UATheMysticClass',
    page: 27,
    type: 'T',
    entries: [
      'As an action, you plant a false belief in the mind of one creature that you can see within 60 feet of you. You can create a sound or an image. Only the target of this talent perceives the sound or image you create.',
      "If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else's voice, a creature's roar, a musical instrument, or any other sound you pick. It lasts for 1 minute.",
      "If you create an object, it must fit within a 5-foot cube and can't move or be reflective. The image can't create any effect that influences a sense other than sight. The image lasts for 1 minute, and it disappears if the creature touches it.",
    ],
  },
  {
    name: 'Diminution',
    source: 'UATheMysticClass',
    page: 14,
    type: 'D',
    order: 'Immortal',
    entries: [
      'You manipulate the matter that composes your body, drastically reducing your size without surrendering any of your might.',
    ],
    focus: 'While focused on this discipline, you have advantage on Dexterity ({@skill Stealth}) checks.',
    modes: [
      {
        cost: {
          min: 2,
          max: 2,
        },
        concentration: {
          duration: 10,
          unit: 'min',
        },
        name: 'Miniature Form',
        entries: [
          'As a bonus action, you become Tiny until your {@status concentration} ends. While this size, you gain a +5 bonus to Dexterity ({@skill Stealth}) checks and can move through gaps up to 6 inches across without squeezing.',
        ],
      },
      {
        cost: {
          min: 2,
          max: 2,
        },
        name: 'Toppling Shift',
        entries: [
          'As a bonus action, you shift to an incredibly small size and then suddenly return to normal, sending an opponent flying backward. Choose one creature you can see within 5 feet of you. It must succeed on a Strength saving throw or be knocked {@condition prone}.',
        ],
      },
      {
        cost: {
          min: 5,
          max: 5,
        },
        name: 'Sudden Shift',
        entries: [
          'As a reaction when you are hit by an attack, you shift down to minute size to avoid the attack. The attack misses, and you move up to 5 feet without provoking opportunity attacks before returning to normal size.',
        ],
      },
      {
        cost: {
          min: 7,
          max: 7,
        },
        concentration: {
          duration: 10,
          unit: 'min',
        },
        name: 'Microscopic Form',
        entries: [
          "As a bonus action, you become smaller than Tiny until your {@status concentration} ends. While this size, you gain a +10 bonus to Dexterity ({@skill Stealth}) checks and a +5 bonus to AC, you can move through gaps up to 1 inch across without squeezing, and you can't make weapon attacks.",
        ],
      },
    ],
  },
  {
    name: 'Energy Beam',
    source: 'UATheMysticClass',
    page: 27,
    type: 'T',
    entries: [
      'As an action, you target one creature you can see within 90 feet of you. The target must succeed on a Dexterity saving throw or take {@damage 1d8} acid, cold, fire, lightning, or thunder damage (your choice).',
      "The talent's damage increases by {@dice 1d8} when you reach 5th level ({@damage 2d8}), 11th level ({@damage 3d8}), and 17th level ({@damage 4d8}).",
    ],
  },
  {
    name: 'Giant Growth',
    source: 'UATheMysticClass',
    page: 14,
    type: 'D',
    order: 'Immortal',
    entries: [
      'You infuse yourself with psionic energy to grow to tremendous size, bolstering your strength and durability.',
    ],
    focus: 'While focused on this discipline, your reach increases by 5 feet.',
    modes: [
      {
        cost: {
          min: 2,
          max: 2,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Ogre Form',
        entries: [
          "As a bonus action, you gain 10 temporary hit points. In addition, until your {@status concentration} ends, your melee weapon attacks deal an extra {@damage 1d4} bludgeoning damage on a hit, and your reach increases by 5 feet. If you're smaller than Large, you also become Large for the duration.",
        ],
      },
      {
        cost: {
          min: 7,
          max: 7,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Giant Form',
        entries: [
          "As a bonus action, you gain 30 temporary hit points. In addition, until your {@status concentration} ends, your melee weapon attacks deal an extra {@damage 2d6} bludgeoning damage on a hit, and your reach increases by 10 feet. If you're smaller than Huge, you also become Huge for the duration.",
        ],
      },
    ],
  },
  {
    name: 'Intellect Fortress',
    source: 'UATheMysticClass',
    page: 14,
    type: 'D',
    order: 'Awakened',
    entries: [
      'You forge an indomitable wall of psionic energy around your mind\u2014one that allows you to launch counterattacks against your opponents.',
    ],
    focus: 'While focused on this discipline, you gain resistance to psychic damage.',
    modes: [
      {
        cost: {
          min: 2,
          max: 2,
        },
        name: 'Psychic Backlash',
        entries: [
          'As a reaction, you can impose disadvantage on an attack roll against you if you can see the attacker. If the attack still hits you, the attacker takes {@damage 2d10} psychic damage.',
        ],
      },
      {
        cost: {
          min: 1,
          max: 7,
        },
        name: 'Psychic Parry',
        entries: [
          'As a reaction when you make an Intelligence, a Wisdom, or a Charisma saving throw, you gain a +1 bonus to that saving throw for each psi point you spend on this ability. You can use this ability after rolling the die but before suffering the results.',
        ],
      },
      {
        cost: {
          min: 5,
          max: 5,
        },
        concentration: {
          duration: 10,
          unit: 'min',
        },
        name: 'Psychic Redoubt',
        entries: [
          'As an action, you create a field of protective psychic energy. Choose any number of creatures within 30 feet of you. Until your {@status concentration} ends, each target has resistance to psychic damage and advantage on Intelligence, Wisdom, and Charisma saving throws.',
        ],
      },
    ],
  },
  {
    name: 'Iron Durability',
    source: 'UATheMysticClass',
    page: 15,
    type: 'D',
    order: 'Immortal',
    entries: [
      'You transform your body to become a living metal, allowing you to shrug off attacks that would cripple weaker creatures.',
    ],
    focus: 'While focused on this discipline, you gain a +1 bonus to AC.',
    modes: [
      {
        cost: {
          min: 1,
          max: 7,
        },
        name: 'Iron Hide',
        entries: [
          'As a reaction when you are hit by an attack, you gain a +1 bonus to AC for each psi point you spend on this ability. The bonus lasts until the end of your next turn. This bonus applies against the triggering attack.',
        ],
      },
      {
        cost: {
          min: 2,
          max: 2,
        },
        name: 'Steel Hide',
        entries: [
          'As a bonus action, you gain resistance to bludgeoning, piercing, and slashing damage until the end of your next turn.',
        ],
      },
      {
        cost: {
          min: 7,
          max: 7,
        },
        concentration: {
          duration: 1,
          unit: 'hr',
        },
        name: 'Iron Resistance',
        entries: [
          'As an action, you gain resistance to bludgeoning, piercing, or slashing damage (your choice), which lasts until your {@status concentration} ends.',
        ],
      },
    ],
  },
  {
    name: 'Light Step',
    source: 'UATheMysticClass',
    page: 27,
    type: 'T',
    entries: [
      'As a bonus action, you alter your density and weight to improve your mobility. For the rest of your turn, your walking speed increases by 10 feet, and the first time you stand up this turn, you do so without expending any of your movement if your speed is greater than 0.',
    ],
  },
  {
    name: 'Mantle of Awe',
    source: 'UATheMysticClass',
    page: 15,
    type: 'D',
    order: 'Awakened',
    entries: [
      'You learn to use psionic energy to manipulate others with a subtle combination of psi and your own, natural charm.',
    ],
    focus:
      'While focused on this discipline, you gain a bonus to Charisma checks. The bonus equals half your Intelligence modifier (minimum of +1).',
    modes: [
      {
        cost: {
          min: 1,
          max: 7,
        },
        name: 'Charming Presence',
        entries: [
          'As an action, you exert an aura of sympathetic power. Roll {@dice 2d8} per psi point spent on this ability; the total is how many hit points worth of creatures this option can affect. Creatures within 30 feet of you are affected in ascending order of their hit point maximums, ignoring {@condition incapacitated} creatures, creatures immune to being {@condition charmed}, and creatures engaged in combat.',
          "Starting with the creature that has the lowest hit point maximum, each creature affected by this option is {@condition charmed} by you for 10 minutes, regarding you as a friendly acquaintance. Subtract each creature's hit point maximum from the total before moving on to the next creature. A creature's hit point maximum must be equal to or less than the remaining total for that creature to be affected.",
        ],
      },
      {
        cost: {
          min: 2,
          max: 2,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Center of Attention',
        entries: [
          "As an action, you exert an aura of power that grabs a creature's attention. Choose one creature you can see within 60 feet of you. It must make a Charisma saving throw. On a failed save, the creature is so thoroughly distracted by you that all other creatures are {@condition invisible} to it until your {@status concentration} ends. This effect ends if the creature can no longer see or hear you or if it takes damage.",
        ],
      },
      {
        cost: {
          min: 7,
          max: 7,
        },
        concentration: {
          duration: 10,
          unit: 'min',
        },
        name: 'Invoke Awe',
        entries: [
          'As an action, you exert an aura that inspires awe in others. Choose up to 5 creatures you can see within 60 feet of you. Each target must succeed on an Intelligence saving throw or be {@condition charmed} by you until your {@status concentration} ends. While {@condition charmed}, the target obeys all your verbal commands to the best of its ability and without doing anything obviously self-destructive. The {@condition charmed} target will attack only creatures that it has seen attack you since it was {@condition charmed} or that it was already hostile toward. At the end of each of its turns, it can repeat the saving throw, ending the effect on itself on a success.',
        ],
      },
    ],
  },
  {
    name: 'Mantle of Command',
    source: 'UATheMysticClass',
    page: 15,
    type: 'D',
    order: 'Avatar',
    entries: ['You exert an aura of trust and authority, enhancing the coordination among your allies.'],
    focus:
      "While focused on this discipline, when you end your turn and didn't move during it, you can use your reaction to allow one ally you can see within 30 feet of you to move up to half their speed, following a path of your choice. To move in this way, the ally mustn't be {@condition incapacitated}.",
    modes: [
      {
        cost: {
          min: 2,
          max: 2,
        },
        name: 'Coordinated Movement',
        entries: [
          'As a bonus action, choose up to five allies you can see within 60 feet of you. Each of those allies can use their reaction to move up to half their speed, following a path of your choice.',
        ],
      },
      {
        cost: {
          min: 2,
          max: 2,
        },
        concentration: {
          duration: 1,
          unit: 'rnd',
        },
        name: "Commander's Sight",
        entries: [
          'As an action, choose one creature you can see within 60 feet of you. Until the start of your next turn, your allies have advantage on attack rolls against that target.',
        ],
      },
      {
        cost: {
          min: 3,
          max: 3,
        },
        name: 'Command to Strike',
        entries: [
          'As an action, choose one ally you can see within 60 feet of you. That ally can use their reaction to immediately take the Attack action. You choose the targets.',
        ],
      },
      {
        cost: {
          min: 5,
          max: 5,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Strategic Mind',
        entries: [
          'As an action, you exert an aura of trust and command that unites your allies into a cohesive unit. Until your {@status concentration} ends, any ally within 60 feet of you on their turn can, as a bonus action, take the Dash or Disengage action or roll a {@dice d4} and add the number rolled to each attack roll they make that turn.',
        ],
      },
      {
        cost: {
          min: 7,
          max: 7,
        },
        name: 'Overwhelming Attack',
        entries: [
          'As an action, choose up to five allies you can see within 60 feet of you. Each of those allies can use their reaction to take the Attack action. You choose the target of the attacks.',
        ],
      },
    ],
  },
  {
    name: 'Mantle of Courage',
    source: 'UATheMysticClass',
    page: 16,
    type: 'D',
    order: 'Avatar',
    entries: ['You focus your mind on courage, radiating confidence and bravado to your allies.'],
    focus:
      'While focused on this discipline, you and allies within 10 feet of you who can see you have advantage on saving throws against being {@condition frightened}.',
    modes: [
      {
        cost: {
          min: 2,
          max: 2,
        },
        name: 'Incite Courage',
        entries: [
          'As a bonus action, choose up to six creatures you can see within 60 feet of you. If any of those creatures is {@condition frightened}, that condition ends on that creature.',
        ],
      },
      {
        cost: {
          min: 1,
          max: 7,
        },
        concentration: {
          duration: 10,
          unit: 'min',
        },
        name: 'Aura of Victory',
        entries: [
          'As a bonus action, you project psionic energy until your {@status concentration} ends. The energy fortifies you and your allies when your enemies are felled; whenever an enemy you can see is reduced to 0 hit points, you and each of your allies within 30 feet of you gain temporary hit points equal to double the psi points spent to activate this effect.',
        ],
      },
      {
        cost: {
          min: 6,
          max: 6,
        },
        concentration: {
          duration: 1,
          unit: 'rnd',
        },
        name: 'Pillar of Confidence',
        entries: [
          'As an action, you and up to five creatures you can see within 60 feet of you each gain one extra action to use on your individual turns. The action goes away if not used before the end of your next turn. the action can be used only to make one weapon attack or to take the Dash or Disengage action.',
        ],
      },
    ],
  },
  {
    name: 'Mantle of Fear',
    source: 'UATheMysticClass',
    page: 16,
    type: 'D',
    order: 'Avatar',
    entries: ['You tap into a well of primal fear and turn yourself into a beacon of terror to your enemies.'],
    focus: 'While focused on this discipline, you have advantage on Charisma ({@skill Intimidation}) checks.',
    modes: [
      {
        cost: {
          min: 2,
          max: 2,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Incite Fear',
        entries: [
          "As an action, choose one creature you can see within 60 feet of you. The target must succeed on a Wisdom saving throw or become {@condition frightened} of you until your {@status concentration} ends. Whenever the {@condition frightened} target ends its turn in a location where it can't see you, it can repeat the saving throw, ending the effect on itself on a success.",
        ],
      },
      {
        cost: {
          min: 3,
          max: 3,
        },
        concentration: {
          duration: 1,
          unit: 'hr',
        },
        name: 'Unsettling Aura',
        entries: [
          'As a bonus action, you cloak yourself in unsettling psychic energy. Until your {@status concentration} ends, any enemy within 60 feet of you that can see you must spend 1 extra foot of movement for every foot it moves toward you. A creature ignores this effect if immune to being {@condition frightened}.',
        ],
      },
      {
        cost: {
          min: 5,
          max: 5,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Incite Panic',
        entries: [
          "As an action, choose up to eight creatures you can see within 90 feet of you that can see you. At the start of each of a target's turns before your {@status concentration} ends, the target must make a Wisdom saving throw. On a failed save, the target is {@condition frightened} until the start of its next turn, and you roll a die. If you roll an odd number, the {@condition frightened} target moves half its speed in random direction and takes no action on that turn, other than to scream in terror. If you roll an even number, the {@condition frightened} target makes one melee attack against a random target within its reach. If there is no such target, it moves half its speed in a random direction and takes no action on that turn. This effect end on a target if it succeeds on three saving throws against it.",
        ],
      },
    ],
  },
  {
    name: 'Mantle of Fury',
    source: 'UATheMysticClass',
    page: 16,
    type: 'D',
    order: 'Avatar',
    entries: [
      'You allow the primal fury lurking deep within your mind to burst forth, catching you and you allies in an implacable bloodthirst.',
    ],
    focus:
      'While focused on this discipline in combat, you and any ally who starts their turn within 10 feet of you gains a 5 foot increase to their walking speed during that turn.',
    modes: [
      {
        cost: {
          min: 2,
          max: 2,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Incite Fury',
        entries: [
          'As a bonus action, choose up to three allies you can see within 60 feet of you (you can choose yourself in place of one of the allies). Until your {@status concentration} ends, each target can roll a {@dice d4} when rolling damage for a melee weapon attack and add the number rolled to the damage roll.',
        ],
      },
      {
        cost: {
          min: 2,
          max: 2,
        },
        name: 'Mindless Charge',
        entries: [
          'As a bonus action, choose up to three creatures you can see within 60 feet of you. Each target can immediately use its reaction to move up to its speed in a straight line toward its nearest enemy.',
        ],
      },
      {
        cost: {
          min: 3,
          max: 3,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Aura of Bloodletting',
        entries: [
          'As a bonus action, you unleash an aura of rage. Until your {@status concentration} ends, you and any creature within 60 feet of you has advantage on melee attack rolls.',
        ],
      },
      {
        cost: {
          min: 5,
          max: 5,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Overwhelming Fury',
        entries: [
          'As an action, you flood rage into one creature you can see within 60 feet of you. The target must succeed on a Charisma saving throw, or it can use its actions only to make melee attacks until your {@status concentration} ends. It can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.',
        ],
      },
    ],
  },
  {
    name: 'Mantle of Joy',
    source: 'UATheMysticClass',
    page: 17,
    type: 'D',
    order: 'Avatar',
    entries: [
      'You tap into the joy within you, radiating it outward in soothing, psychic energy that brings hope and comfort to creatures around you.',
    ],
    focus: 'While focused on this discipline, you have advantage on Charisma ({@skill Persuasion}) checks',
    modes: [
      {
        cost: {
          min: 1,
          max: 7,
        },
        name: 'Soothing Presence',
        entries: [
          'As a bonus action, choose up to three creatures you can see within 60 feet of you. Each target gains 3 temporary hit points per psi point spent on this effect.',
        ],
      },
      {
        cost: {
          min: 2,
          max: 2,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Comforting Aura',
        entries: [
          'As a bonus action, choose up to three allies you can see (you can choose yourself in place of one of the allies). Until your {@status concentration} ends, each target can roll a {@dice d4} when making a saving throw and add the number rolled to the total.',
        ],
      },
      {
        cost: {
          min: 3,
          max: 3,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Aura of Jubilation',
        entries: [
          'As a bonus action, you radiate a distracting mirth until your {@status concentration} ends. Each creature within 60 feet of you that can see you suffers disadvantage on any checks using the {@skill Perception} and {@skill Investigation} skills.',
        ],
      },
      {
        cost: {
          min: 5,
          max: 5,
        },
        name: 'Beacon of Recovery',
        entries: [
          "As a bonus action, you and up to five allies you can see within 60 feet of you can immediately make saving throws against every effect they're suffering that allows a save at the start or end of their turns.",
        ],
      },
    ],
  },
  {
    name: 'Mastery of Air',
    source: 'UATheMysticClass',
    page: 17,
    type: 'D',
    order: 'Wu Jen',
    entries: ['You become one with the power of elemental air.'],
    focus:
      'While focused on this discipline, you take no falling damage, and you ignore {@quickref difficult terrain||3} when walking.',
    modes: [
      {
        cost: {
          min: 1,
          max: 7,
        },
        name: 'Wind Step',
        entries: [
          'As part of your move on your turn, you can fly up to 20 feet for each psi point spent. If you end this flight in the air, you fall unless something else holds you aloft.',
        ],
      },
      {
        cost: {
          min: 1,
          max: 7,
        },
        name: 'Wind Stream',
        entries: [
          'As an action, you create a line of focused air that is 30 feet long and 5 feet wide. Each creature in that area must make a Strength saving throw, taking {@scaledamage 1d8|1-7|1d8|psi} bludgeoning damage per psi point spent and being knocked {@condition prone} on a failed save, or half as much damage on a successful one.',
        ],
      },
      {
        cost: {
          min: 3,
          max: 3,
        },
        concentration: {
          duration: 10,
          unit: 'min',
        },
        name: 'Cloak of Air',
        entries: [
          'As a bonus action, you seize control of the air around you to create a protective veil. Until your {@status concentration} ends, attack rolls against you have disadvantage, and when a creature you can see misses you with a melee attack, you can use your reaction to force the creature to repeat the attack roll against itself.',
        ],
      },
      {
        cost: {
          min: 5,
          max: 5,
        },
        concentration: {
          duration: 10,
          unit: 'min',
        },
        name: 'Wind Form',
        entries: [
          'As a bonus action, you gain a flying speed of 60 feet, which lasts until your {@status concentration} ends.',
        ],
      },
      {
        cost: {
          min: 6,
          max: 6,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Misty Form',
        entries: [
          "As an action, your body becomes like a misty cloud until your {@status concentration} ends. In this form, you gain resistance to bludgeoning, piercing, and slashing damage, and you can't take actions other than the Dash action. You can pass through openings that are no more than 1 inch wide without squeezing.",
        ],
      },
      {
        cost: {
          min: 7,
          max: 7,
        },
        concentration: {
          duration: 1,
          unit: 'hr',
        },
        name: 'Animate Air',
        entries: [
          'As an action, you cause an air elemental to appear in an unoccupied space you can see within 120 feet of you. The elemental lasts until your {@status concentration} ends, and it obeys your verbal commands. In combat, roll for its initiative, and choose its behavior during its turns. When this effect ends, the elemental disappears. See the Monster Manual for its stat block.',
        ],
      },
    ],
  },
  {
    name: 'Mastery of Fire',
    source: 'UATheMysticClass',
    page: 17,
    type: 'D',
    order: 'Wu Jen',
    entries: ['You align your mind with the energy of elemental fire.'],
    focus:
      'While focused on this discipline, you gain resistance to fire damage, and you gain a +2 bonus to rolls for fire damage.',
    modes: [
      {
        cost: {
          min: 1,
          max: 7,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Combustion',
        entries: [
          "As an action, choose one creature or object you can see within 120 feet of you. The target must make a Constitution save. On a failed save, the target takes {@scaledamage 1d10|1-7|1d10|psi} fire damage per psi point spent, and it catches on fire, taking {@damage 1d6} fire damage at the end of each of its turns until your {@status concentration} ends or until it or a creature adjacent to it extinguishes the flames with an action. On a successful save, the target takes half as much damage and doesn't catch on fire.",
        ],
      },
      {
        cost: {
          min: 3,
          max: 3,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Rolling Flame',
        entries: [
          'As an action, you create fire in a 20-foot-by-20-foot cube within 5 feet of you. The fire lasts until your {@status concentration} ends. Any creature in that area when you use this ability and any creature that ends its turn there takes 5 fire damage.',
        ],
      },
      {
        cost: {
          min: 5,
          max: 5,
        },
        name: 'Detonation',
        entries: [
          'As an action, you create a fiery explosion at a point you can see within 120 feet of you. Each creature in a 20-foot-radius sphere centered on that point must make a Constitution saving throw, taking {@damage 7d6} fire damage and being knocked {@condition prone} on a failed save, or half as much damage on a successful one.',
        ],
      },
      {
        cost: {
          min: 5,
          max: 5,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Fire Form',
        entries: [
          'As a bonus action, you become wreathed in flames until your {@status concentration} ends. Any creature that end its turn within 5 feet of you takes {@damage 3d6} fire damage.',
        ],
      },
      {
        cost: {
          min: 7,
          max: 7,
        },
        concentration: {
          duration: 1,
          unit: 'hr',
        },
        name: 'Animate Fire',
        entries: [
          'As an action, you cause a fire elemental to appear in an unoccupied space you can see within 120 feet of you. The elemental lasts until your {@status concentration} ends, and it obeys your verbal commands. In combat, roll for its initiative, and choose its behavior during its turns. When this effect ends, the elemental disappears. See the Monster Manual for its stat block.',
        ],
      },
    ],
  },
  {
    name: 'Mastery of Force',
    source: 'UATheMysticClass',
    page: 18,
    type: 'D',
    order: 'Wu Jen',
    entries: [
      'As a student of psionic power, you perceive the potential energy that flows through all things. You reach out with your mind, transforming the potential into the actual. Objects and creatures move at your command.',
    ],
    focus: 'While focused on this discipline, you have advantage on Strength checks.',
    modes: [
      {
        cost: {
          min: 1,
          max: 7,
        },
        name: 'Push',
        entries: [
          'As an action, choose one creature you can see within 60 feet of you. The target must make a Strength saving throw. On a failed save, it takes {@scaledamage 1d8|1-7|1d8|psi} force damage per psi point spent and is pushed up to 5 feet per point spent in a straight line away from you. On a successful save, it takes half as much damage.',
        ],
      },
      {
        cost: {
          min: 2,
          max: 7,
        },
        name: 'Move',
        entries: [
          "Choose one object you can see within 60 feet of you that isn't being worn or carried by another creature and that isn't secured in place. It can't be larger than 20 feet on a side, and its maximum weight depends on the psi points spent on this ability, as shown below.",
          'As an action, you move the object up to 60 feet, and you must keep the object within sight during this movement. If the object ends this movement in the air, it falls. If the object would fall on a creature, the creature must succeed on a DC 10 Dexterity saving throw or take damage as listed on the table below.',
          {
            type: 'table',
            colLabels: ['Psi Spent', 'Maximum Weight', 'Bludgeoning Damage'],
            colStyles: ['col-3 text-center', 'col-6 text-center', 'col-3 text-center'],
            rows: [
              ['2', '25 lbs.', '{@damage 2d6}'],
              ['3', '50 lbs.', '{@damage 4d6}'],
              ['5', '250 lbs.', '{@damage 6d6}'],
              ['6', '500 lbs.', '{@damage 7d6}'],
              ['7', '1,000 lbs.', '{@damage 8d6}'],
            ],
          },
        ],
      },
      {
        cost: {
          min: 2,
          max: 2,
        },
        name: 'Inertial Armor',
        entries: [
          'As an action, you sheathe yourself in an intangible field of magical force. For 8 hours, your base AC is 14 + your Dexterity modifier, and you gain resistance to force damage. This effect ends if you are wearing or don armor.',
        ],
      },
      {
        cost: {
          min: 3,
          max: 3,
        },
        concentration: {
          duration: 10,
          unit: 'min',
        },
        name: 'Telekinetic Barrier',
        entries: [
          'As an action, you create a transparent wall of telekinetic energy, at least one portion of which must be within 60 feet of you. The wall is 40 feet long, 10 feet high, and 1 inch thick. The wall lasts until your {@status concentration} ends. Each 10-foot section of the wall has an AC of 10 and 10 hit points.',
        ],
      },
      {
        cost: {
          min: 3,
          max: 3,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Grasp',
        entries: [
          'You attempt to grasp a creature in telekinetic energy and hold it captive. As an action, choose one creature you can see within 60 feet of you. The target must succeed on a Strength saving throw or be {@condition grappled} by you until your {@status concentration} ends or until the target leaves your reach, which is 60 feet for this grapple.',
          'The {@condition grappled} target can escape by succeeding on a Strength (Athletics) or Dexterity (Acrobatics) check contested by your psionic ability plus your proficiency bonus. When a target attempts to escape in this way, you can spend psi points to boost your check, abiding by your psi limit. You gain a +1 bonus per psi point spent.',
          'While a target is {@condition grappled} in this manner, you create one of the following effects as an action:',
        ],
      },
      {
        cost: {
          min: 1,
          max: 7,
        },
        name: 'Crush',
        entries: ['The target takes {@scaledamage 1d6|1-7|1d6|psi} bludgeoning damage per psi point spent.'],
      },
      {
        cost: {
          min: 1,
          max: 7,
        },
        name: 'Move',
        entries: [
          'You move the target up to 5 feet per psi point spent. You can move it in the air and hold it there. It falls if the grapple ends.',
        ],
      },
    ],
  },
  {
    name: 'Mastery of Ice',
    source: 'UATheMysticClass',
    page: 19,
    type: 'D',
    order: 'Wu Jen',
    entries: ['You master the power of ice, shaping it to meet you demands.'],
    focus: 'While focused on this discipline, you have resistance to cold damage.',
    modes: [
      {
        cost: {
          min: 1,
          max: 7,
        },
        name: 'Ice Spike',
        entries: [
          'As an action, you hurl a mote of ice at one creature you can see within 120 feet of you. The target must make a Dexterity saving throw. On a failed save, the target takes {@scaledamage 1d8|1-7|1d8|psi} cold damage per psi point spent and has its speed halved until the start of your next turn. On a successful save, the target takes half as much damage.',
        ],
      },
      {
        cost: {
          min: 2,
          max: 2,
        },
        name: 'Ice Sheet',
        entries: [
          'As an action, choose a point on the ground you can see within 60 feet of you. The ground in a 20-foot radius centered on that point becomes covered in ice for 10 minutes. It is {@quickref difficult terrain||3}, and any creature that moves more than 10 feet on it must succeed on a Dexterity saving throw or fall {@condition prone}. If the surface is sloped, a creature that falls {@condition prone} in the area immediately slides to the bottom of the slope.',
        ],
      },
      {
        cost: {
          min: 3,
          max: 3,
        },
        name: 'Frozen Sanctuary',
        entries: ['As a bonus action, you sheathe yourself with icy resilience. You gain 20 temporary hit points.'],
      },
      {
        cost: {
          min: 5,
          max: 5,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Frozen Rain',
        entries: [
          'As an action, choose a point you can see within 120 feet of you. The air in a 20-foot-radius sphere centered on that point becomes deathly cold and saturated with moisture. Each creature in that area must make a Constitution saving throw. On a failed save, a target takes {@damage 6d6} cold damage, and its speed is reduced to 0 until your {@status concentration} ends. On a successful save, a target takes half as much damage.',
          "As an action, a target that has its speed reduced can end the effect early if it succeeds on a Strength (Athletics) check with a DC equal to this effect's save DC.",
          "You can increase this effect's damage by {@scaledamage 6d6|5-7|1d6|psi} per each additional psi point spent on it.",
        ],
      },
      {
        cost: {
          min: 6,
          max: 6,
        },
        concentration: {
          duration: 10,
          unit: 'min',
        },
        name: 'Ice Barrier',
        entries: [
          'As an action, you create a wall of ice, at least one portion of which must be within 60 feet of you. The wall is 60 feet long, 15 feet high, and 1 foot thick. The wall lasts until your {@status concentration} ends. Each 10-foot section of the wall has AC 12 and 30 hit points. A creature that damages the wall with a melee attack takes cold damage equal to the damage the creature dealt to the wall.',
        ],
      },
    ],
  },
  {
    name: 'Mastery of Light and Darkness',
    source: 'UATheMysticClass',
    page: 19,
    type: 'D',
    order: 'Wu Jen',
    entries: ['You claim dominion over light and darkness with your mind.'],
    focus:
      'While focused on this discipline, natural and magical darkness within 30 feet of you has no effect on your vision.',
    modes: [
      {
        cost: {
          min: 1,
          max: 7,
        },
        name: 'Darkness',
        entries: [
          'As an action, you create an area of magical darkness, which foils darkvision. Choose a spot you can see within 60 feet of you. Magical darkness radiates from that point in a sphere with a 10-foot radius per psi point spent on this ability. The light produced by spells of 2nd level or less is suppressed in this area.',
        ],
      },
      {
        cost: {
          min: 2,
          max: 2,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Light',
        entries: [
          "As an action, an object you touch radiates light in a 20-foot radius and dim light for an additional 20 feet. The light lasts until your {@status concentration} ends. Alternatively, a creature you touch radiates light in the same manner if it fails a Dexterity saving throw. While lit in this manner, it can't hide, and attack rolls against it gain advantage.",
        ],
      },
      {
        cost: {
          min: 3,
          max: 3,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Shadow Beasts',
        entries: [
          'As an action, you cause two {@creature shadow||shadows} to appear in unoccupied spaces you can see within 60 feet of you. The {@creature shadow||shadows} last until your {@status concentration} ends, and they obey your verbal commands. In combat, roll for their initiative, and choose their behavior during their turns. When this effect ends, the {@creature shadow||shadows} disappear. See the Monster Manual for their stat block.',
        ],
      },
      {
        cost: {
          min: 5,
          max: 5,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Radiant Beam',
        entries: [
          'As an action, you project a beam of light at one creature you can see within 60 feet of you. The target must make a Dexterity saving throw. On a failed save, it takes {@damage 6d6} radiant damage and is {@condition blinded} until your {@status concentration} ends. On a successful save, it takes half as much damage. A {@condition blinded} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.',
          "You can increase this effect's damage by {@scaledamage 6d6|5-7|1d6|psi} per each additional psi point spent on it.",
        ],
      },
    ],
  },
  {
    name: 'Mastery of Water',
    source: 'UATheMysticClass',
    page: 19,
    type: 'D',
    order: 'Wu Jen',
    entries: ['Your mind becomes one with elemental water, attuning your thoughts to its ebb and flow.'],
    focus:
      'While focused on this discipline, you have a swimming speed equal to your walking speed, and you can breathe underwater.',
    modes: [
      {
        cost: {
          min: 1,
          max: 7,
        },
        name: 'Desiccate',
        entries: [
          'As an action, choose one creature you can see within 60 feet of you. The target must make a Constitution saving throw, taking {@scaledamage 1d10|1-7|1d10|psi} necrotic damage per psi point spent on this ability, or half as much damage on a successful one.',
        ],
      },
      {
        cost: {
          min: 2,
          max: 2,
        },
        name: 'Watery Grasp',
        entries: [
          "As an action, you unleash a wave that surges forth and then retreats to you like the rising tide. You create a wave in a 20-foot-by-20-foot square. At least some portion of the square's border must be within 5 feet of you. Any creature in that square must make a Strength saving throw. On a failed save, a target takes {@damage 2d6} bludgeoning damage, is knocked {@condition prone}, and is pulled up to 10 feet closer to you. On a successful save, a target takes half as much damage. You can increase this ability's damage by {@scaledamage 2d6|2-7|1d6|psi} per additional psi point spent on it.",
        ],
      },
      {
        cost: {
          min: 3,
          max: 3,
        },
        name: 'Water Whip',
        entries: [
          "As an action, you unleash a jet of water in a line that is 60 feet long and 5 feet wide. Each creature in the line must make a Strength saving throw, taking {@damage 3d6} bludgeoning damage on a failed save, or half as much damage on a successful one. In addition, you can move each target that fails its saving throw to any unoccupied space touching the line. You can increase this ability's damage by {@scaledamage 3d6|3-7|1d6|psi} per additional psi point spent on it.",
        ],
      },
      {
        cost: {
          min: 5,
          max: 5,
        },
        name: 'Water Breathing',
        entries: [
          'As an action, you grant yourself and up to ten willing creatures you can see within 60 feet of you the ability to breathe underwater for the next 24 hours.',
        ],
      },
      {
        cost: {
          min: 6,
          max: 6,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Water Sphere',
        entries: [
          "As an action, you cause a sphere of water to form around a creature. Choose one creature you can see within 60 feet of you. The target must make a Dexterity saving throw. On a failed save, it becomes trapped in the sphere of water until your {@status concentration} ends. While the target is trapped, its speed is halved, it suffers disadvantage on attack rolls, and it can't see anything more than 10 feet away from it. However, attack rolls against it also suffer disadvantage. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a successful one.",
        ],
      },
      {
        cost: {
          min: 7,
          max: 7,
        },
        concentration: {
          duration: 1,
          unit: 'hr',
        },
        name: 'Animate Water',
        entries: [
          'As an action, you cause a water elemental to appear in an unoccupied space you can see within 120 feet of you. The elemental lasts until your {@status concentration} ends, and it obeys your verbal commands. In combat, roll for its initiative, and choose its behavior during its turns. When this effect ends, the elemental disappears. See the Monster Manual for its stat block.',
        ],
      },
    ],
  },
  {
    name: 'Mastery of Weather',
    source: 'UATheMysticClass',
    page: 20,
    type: 'D',
    order: 'Wu Jen',
    entries: ['Your mind reaches into the sky, reshaping the stuff of storms to serve your needs.'],
    focus: 'While focused on this discipline, you have resistance to lightning and thunder damage.',
    modes: [
      {
        cost: {
          min: 1,
          max: 7,
        },
        concentration: {
          duration: 10,
          unit: 'min',
        },
        name: 'Cloud Steps',
        entries: [
          'As an action, you conjure forth clouds to create a solid, translucent staircase that lasts until your {@status concentration} ends. The stairs form a spiral that fills a 10-foot-by-10-foot area and reaches upward 20 feet per psi point spent.',
        ],
      },
      {
        cost: {
          min: 1,
          max: 7,
        },
        name: 'Hungry Lightning',
        entries: [
          "As an action, you lash out at one creature you can see within 60 feet of you with tendrils of lightning. The target must make a Dexterity saving throw, with disadvantage if it's wearing heavy armor. The target takes {@scaledamage 1d8|1-7|1d8|psi} lightning damage per psi point spent on a failed save, or half as much damage on a successful one.",
        ],
      },
      {
        cost: {
          min: 2,
          max: 2,
        },
        concentration: {
          duration: 10,
          unit: 'min',
        },
        name: 'Wall of Clouds',
        entries: [
          'As an action, you create a wall of clouds, at least one portion of which must be within 60 feet of you. The wall is 60 feet long, 15 feet high, and 1 foot thick. The wall lasts until your {@status concentration} ends. Creatures can pass through it without hindrance, but the wall blocks vision.',
        ],
      },
      {
        cost: {
          min: 2,
          max: 2,
        },
        name: 'Whirlwind',
        entries: [
          'As an action, choose a point you can see within 60 feet of you. Winds howl in a 20-foot-radius sphere centered on that point. Each creature in the sphere must succeed on a Strength saving throw or take {@damage 1d6} bludgeoning damage and be moved to an unoccupied space of your choice in the sphere. Any loose object in the sphere is moved to an unoccupied space of your choice within it if the object weighs no more than 100 pounds.',
        ],
      },
      {
        cost: {
          min: 5,
          max: 5,
        },
        name: 'Lightning Leap',
        entries: [
          'As an action, you let loose a line of lightning that is 60 feet long and 5 feet wide. Each creature in the line must make a Dexterity saving throw, taking {@damage 6d6} lightning damage on a failed save, or half as much damage on a successful one. You can then teleport to an unoccupied space touched by the line.',
          "You can increase this ability's damage by {@scaledamage 6d6|5-7|1d6|psi} per additional psi point spent on it.",
        ],
      },
      {
        cost: {
          min: 6,
          max: 6,
        },
        concentration: {
          duration: 10,
          unit: 'min',
        },
        name: 'Wall of Thunder',
        entries: [
          "As an action, you create a wall of thunder, at least one portion of which must be within 60 feet of you. The wall is 60 feet long, 15 feet high, and 1 foot thick. The wall lasts until your {@status concentration} ends. Every foot moved through the wall costs 1 extra foot of movement. When a creature moves into the wall's space for the first time on a turn or starts its turn there, that creature must succeed on a Strength saving throw, or it takes {@damage 6d6} thunder damage, is pushed in a straight line up to 30 feet away from the wall, and is knocked {@condition prone}.",
        ],
      },
      {
        cost: {
          min: 7,
          max: 7,
        },
        name: 'Thunder Clap',
        entries: [
          'As an action, choose a point you can see within 60 feet of you. Thunder energy erupts in a 20-foot-radius sphere centered on that point. Each creature in that area must make Constitution saving throw. On a failed save, a target takes {@damage 8d6} thunder damage, and it is {@condition stunned} until the end of your next turn. On a successful save, a target takes half as much damage.',
        ],
      },
    ],
  },
  {
    name: 'Mastery of Wood and Earth',
    source: 'UATheMysticClass',
    page: 21,
    type: 'D',
    order: 'Wu Jen',
    entries: ['You attune your mind to seize control of wood and earth.'],
    focus: 'While focused on this discipline, you have a +1 bonus to AC.',
    modes: [
      {
        cost: {
          min: 1,
          max: 7,
        },
        name: 'Animate Weapon',
        entries: [
          "As an action, your mind seizes control of a one-handed melee weapon you're holding. The weapon flies toward one creature you can see within 30 feet of you and makes a one-handed melee weapon attack against it, using your discipline attack modifier for the attack and damage rolls. On a hit, the weapon deals its normal damage, plus an extra {@scaledamage 1d10|1-7|1d10|psi} force damage per psi point spent on this ability. The weapon returns to your grasp after it attacks.",
        ],
      },
      {
        cost: {
          min: 2,
          max: 2,
        },
        name: 'Warp Weapon',
        entries: [
          "As an action, choose one nonmagical weapon held by one creature you can see within 60 feet of you. That creature must succeed on a Strength saving throw, or the chosen weapon can't be used to attack until the end of your next turn.",
        ],
      },
      {
        cost: {
          min: 3,
          max: 3,
        },
        name: 'Warp Armor',
        entries: [
          "As an action, choose a nonmagical suit of armor worn by one creature you can see within 60 feet of you. That creature must succeed on a Constitution saving throw, or the creature's AC becomes 10 + its Dexterity modifier until the end of your next turn.",
        ],
      },
      {
        cost: {
          min: 3,
          max: 3,
        },
        concentration: {
          duration: 1,
          unit: 'hr',
        },
        name: 'Wall of Wood',
        entries: [
          'As an action, you create a wall of wood at least one portion of which must be within 60 feet of you. The wall is 60 feet long, 15 feet high, and 1 foot thick. The wall lasts until your {@status concentration} ends. Each 5-foot wide section of the wall has AC 12 and 100 hit points. Breaking one section creates a 5-foot by 5-foot hole in it, but the wall otherwise remains intact.',
        ],
      },
      {
        cost: {
          min: 6,
          max: 6,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Armored Form',
        entries: [
          'As a bonus action, you gain resistance to bludgeoning, piercing, and slashing damage, which lasts until your {@status concentration} ends.',
        ],
      },
      {
        cost: {
          min: 7,
          max: 7,
        },
        concentration: {
          duration: 1,
          unit: 'hr',
        },
        name: 'Animate Earth',
        entries: [
          'As an action, you cause an earth elemental to appear in an unoccupied space you can see within 120 feet of you. The elemental lasts until your {@status concentration} ends, and it obeys your verbal commands. In combat, roll for its initiative, and choose its behavior during its turns. When this effect ends, the elemental disappears. See the Monster Manual for its stat block.',
        ],
      },
    ],
  },
  {
    name: 'Mind Meld',
    source: 'UATheMysticClass',
    page: 27,
    type: 'T',
    entries: [
      'As a bonus action, you can communicate telepathically with one willing creature you can see within 120 feet of you. The target must have an Intelligence of at least 2, otherwise this talent fails and the action is wasted.',
      "This communication can occur until the end of the current turn. You don't need to share a language with the target for it to understand your telepathic utterances, and it understands you even if it lacks a language. You also gain access to one memory of the target's choice, gaining perfect recall of one thing it saw or did.",
    ],
  },
  {
    name: 'Mind Slam',
    source: 'UATheMysticClass',
    page: 28,
    type: 'T',
    entries: [
      'As an action, you target one creature you can see within 60 feet of you. The target must succeed on a Constitution saving throw or take {@damage 1d6} force damage. If it takes any of this damage and is Large or smaller, it is knocked {@condition prone}.',
      "The talent's damage increases by {@dice 1d6} when you reach 5th level ({@damage 2d6}), 11th level ({@damage 3d6}), and 17th level ({@damage 4d6}).",
    ],
  },
  {
    name: 'Mind Thrust',
    source: 'UATheMysticClass',
    page: 28,
    type: 'T',
    entries: [
      'As an action, you target one creature you can see within 120 feet of you. The target must succeed on an Intelligence saving throw or take {@damage 1d10} psychic damage.',
      "The talent's damage increases by {@dice 1d10} when you reach 5th level ({@damage 2d10}), 11th level ({@damage 3d10}), and 17th level ({@damage 4d10}).",
    ],
  },
  {
    name: 'Mystic Charm',
    source: 'UATheMysticClass',
    page: 28,
    type: 'T',
    entries: [
      'As an action, you beguile one humanoid you can see within 120 feet of you. The target must succeed on a Charisma saving throw or be {@condition charmed} by you until the end of your next turn.',
    ],
  },
  {
    name: 'Mystic Hand',
    source: 'UATheMysticClass',
    page: 28,
    type: 'T',
    entries: [
      "You can use your action to manipulate or move one object within 30 feet of you. The object can't weigh more than 10 pounds, and you can't affect an object being worn or carried by another creature. If the object is loose, you can move it up to 30 feet in any direction.",
      'This talent allows you to open an unlocked door, pour out a beer stein, and so on.',
      'The object falls to the ground at the end of your turn if you leave it suspended in midair.',
    ],
  },
  {
    name: 'Nomadic Arrow',
    source: 'UATheMysticClass',
    page: 21,
    type: 'D',
    order: 'Nomad',
    entries: [
      'You imbue a ranged weapon with a strange semblance of sentience, allowing it to unerringly find its mark.',
    ],
    focus:
      "While you are focused on this discipline, any attack roll you make for a ranged weapon attack ignores disadvantage. If disadvantage would normally apply to the roll, that roll also can't benefit from advantage.",
    modes: [
      {
        cost: {
          min: 1,
          max: 7,
        },
        name: 'Speed Dart',
        entries: [
          'As a bonus action, you imbue one ranged weapon you hold with psionic power. The next attack you make with it that hits before the end of the current turn deals an extra {@scaledamage 1d10|1-7|1d10|psi} psychic damage per psi point spent.',
        ],
      },
      {
        cost: {
          min: 2,
          max: 2,
        },
        name: 'Seeking Missile',
        entries: [
          'As a reaction when you miss with a ranged weapon attack, you can repeat the attack roll against the same target.',
        ],
      },
      {
        cost: {
          min: 5,
          max: 5,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Faithful Archer',
        entries: [
          'As a bonus action, you imbue a ranged weapon with a limited sentience. Until your {@status concentration} ends, you can make an extra attack with the weapon at the start of each of your turns (no action required). If it is a thrown weapon, it returns to your grasp each time you make any attack with it.',
        ],
      },
    ],
  },
  {
    name: 'Nomadic Chameleon',
    source: 'UATheMysticClass',
    page: 22,
    type: 'D',
    order: 'Nomad',
    entries: [
      'You create a screen of psychic power that distorts your appearance, allowing you to blend into the background or even turn invisible.',
    ],
    focus: 'While focused on this discipline, you have advantage on Dexterity ({@skill Stealth}) checks.',
    modes: [
      {
        cost: {
          min: 2,
          max: 2,
        },
        name: 'Chameleon',
        entries: [
          'As an action, you can attempt to hide even if you fail to meet the requirements needed to do so. At the end of the current turn, you remain hidden only if you then meet the normal requirements for hiding.',
        ],
      },
      {
        cost: {
          min: 3,
          max: 3,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Step from Sight',
        entries: [
          'As a bonus action, cloak yourself from sight. You can target one additional creature for every additional psi point you spend on this ability. The added targets must be visible to you and within 60 feet of you. Each target turns {@condition invisible} and remains so until your {@status concentration} ends or until immediately after it targets, damages, or otherwise affects any creature with an attack, a spell, or another ability.',
        ],
      },
      {
        cost: {
          min: 7,
          max: 7,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Enduring Invisibility',
        entries: [
          'As a bonus action, you turn {@condition invisible} and remain so until your {@status concentration} ends.',
        ],
      },
    ],
  },
  {
    name: 'Nomadic Mind',
    source: 'UATheMysticClass',
    page: 22,
    type: 'D',
    order: 'Nomad',
    entries: [
      'You dispatch part of your psyche into the noosphere, the collective vista of minds and knowledge possessed by living things.',
    ],
    focus:
      'Whenever you focus on this discipline, you choose one skill or tool and have proficiency with it until your focus ends. Alternatively, you gain the ability to read and write one language of your choice until your focus ends.',
    modes: [
      {
        cost: {
          min: 2,
          max: 6,
        },
        concentration: {
          duration: 10,
          unit: 'min',
        },
        name: 'Wandering Mind',
        entries: [
          "You enter a deep contemplation. If you concentrate for this option's full duration, you then gain proficiency with up to three of the following skills (one skill for every 2 psi points spent): {@skill Animal Handling}, {@skill Arcana}, {@skill History}, {@skill Medicine}, {@skill Nature}, {@skill Performance}, {@skill Religion}, and {@skill Survival}. The benefit lasts for 1 hour, no {@status concentration} required.",
        ],
      },
      {
        cost: {
          min: 2,
          max: 2,
        },
        concentration: {
          duration: 1,
          unit: 'hr',
        },
        name: 'Find Creature',
        entries: [
          "You cast your mind about for information about a specific creature. If you concentrate for this option's full duration, you then gain a general understanding of the creature's current location. You learn the region, city, town, village, or district where it is, pinpointing an area between 1 and 3 miles on a side (DM's choice). If the creature is on another plane of existence, you instead learn which plane.",
        ],
      },
      {
        cost: {
          min: 3,
          max: 3,
        },
        concentration: {
          duration: 1,
          unit: 'hr',
        },
        name: 'Item Lore',
        entries: [
          "You carefully study an item. If you concentrate for this option's full duration while remaining within 5 feet of the item, you then gain the benefits of an identify spell cast on that item.",
        ],
      },
      {
        cost: {
          min: 5,
          max: 5,
        },
        name: 'Psychic Speech',
        entries: [
          'As an action, you attune your mind to the psychic imprint of all language. For 1 hour, you gain the ability to understand any language you hear or attempt to read. In addition, when you speak, all creatures that can understand a language understand what you say, regardless of what language you use.',
        ],
      },
      {
        cost: {
          min: 6,
          max: 6,
        },
        concentration: {
          duration: 1,
          unit: 'hr',
        },
        name: 'Wandering Eye',
        entries: [
          "As an action, you create a psychic sensor within 60 feet of you. The sensor lasts until your {@status concentration} ends. The sensor is invisible and hovers in the air. You mentally receive visual information from it, which has normal vision and darkvision with a range of 60 feet. The sensor can look in all directions. As an action, you can move the sensor up to 30 feet in any direction. There is no limit to how far away from you the eye can move, but it can't enter another plane of existence. A solid barrier blocks the eye's movement, but the eye can pass through an opening as small as 1 inch in diameter.",
        ],
      },
      {
        cost: {
          min: 7,
          max: 7,
        },
        concentration: {
          duration: 1,
          unit: 'hr',
        },
        name: 'Phasing Eye',
        entries: [
          "As Wandering Eye above, except the eye can move through solid objects but can't end its movement in one. If it does so, the effect immediately ends.",
        ],
      },
    ],
  },
  {
    name: 'Nomadic Step',
    source: 'UATheMysticClass',
    page: 22,
    type: 'D',
    order: 'Nomad',
    entries: [
      'You exert your mind on the area around you, twisting the intraplanar pathways you perceive to allow instantaneous travel.',
    ],
    focus:
      'After you teleport on your turn while focused on this discipline, your walking speed increases by 10 feet until the end of the turn, as you are propelled by the magic of your teleportation. You can receive this increase only once per turn.',
    modes: [
      {
        cost: {
          min: 1,
          max: 7,
        },
        name: 'Step of a Dozen Paces',
        entries: [
          "If you haven't moved yet on your turn, you take a bonus action to teleport up to 20 feet per psi point spent to an unoccupied space you can see, and your speed is reduced to 0 until the end of the turn.",
        ],
      },
      {
        cost: {
          min: 1,
          max: 1,
        },
        name: 'Nomadic Anchor',
        entries: [
          "As an action, you create an invisible, intangible teleportation anchor in a 5-foot cube you can see within 120 feet of you. For the next 8 hours, whenever you use this psionic discipline to teleport, you can instead teleport to the anchor, even if you can't see it, but it must be within range of the teleportation ability.",
        ],
      },
      {
        cost: {
          min: 2,
          max: 2,
        },
        name: 'Defensive Step',
        entries: [
          'When you are hit by an attack, you can use your reaction to gain a +4 bonus to AC against that attack, possibly turning it into a miss. You then teleport up to 10 feet to an unoccupied space you can see.',
        ],
      },
      {
        cost: {
          min: 2,
          max: 2,
        },
        name: 'There and Back Again',
        entries: [
          'As a bonus action, you teleport up to 20 feet to an unoccupied space you can see and then move up to half your speed. At the end of your turn, you can teleport back to the spot you occupied before teleporting, unless it is now occupied or on a different plane of existence.',
        ],
      },
      {
        cost: {
          min: 3,
          max: 3,
        },
        name: 'Transposition',
        entries: [
          "If you haven't moved yet on your turn, choose an ally you can see within 60 feet of you. As a bonus action, you and that creature teleport, swapping places, and your speed is reduced to 0 until the end of the turn. This ability fails and is wasted if either of you can't fit in the destination space.",
        ],
      },
      {
        cost: {
          min: 5,
          max: 5,
        },
        name: 'Baleful Transposition',
        entries: [
          "As an action, choose one creature you can see within 120 feet of you. That creature must make a Wisdom saving throw. On a failed save, you and that creature teleport, swapping places. This ability fails and is wasted if either of you can't fit in the destination space.",
        ],
      },
      {
        cost: {
          min: 6,
          max: 6,
        },
        name: 'Phantom Caravan',
        entries: [
          "As an action, you and up to six willing creatures of your choice that you can see within 60 feet of you teleport up to 1 mile to a spot you can see. If there isn't an open space for all the targets to occupy at the arrival point, this ability fails and is wasted.",
        ],
      },
      {
        cost: {
          min: 7,
          max: 7,
        },
        concentration: {
          duration: 1,
          unit: 'hr',
        },
        name: "Nomad's Gate",
        entries: [
          'As an action, you create a 5-foot cube of dim, gray light within 5 feet of you. You create an identical cube at any point of your choice within 1 mile that you have viewed within the past 24 hours. Until your {@status concentration} ends, anyone entering one of the cubes immediately teleports to the other one, appearing in an unoccupied space next to it. The teleportation fails if there is no space for the creature to appear in.',
        ],
      },
    ],
  },
  {
    name: 'Precognition',
    source: 'UATheMysticClass',
    page: 23,
    type: 'D',
    order: 'Awakened',
    entries: [
      'By analyzing information around you, from subtle hints to seemingly disconnected facts, you learn to weave a string of probabilities in an instant that gives you extraordinary insights.',
    ],
    focus: 'While focused on this discipline, you have advantage on initiative rolls.',
    modes: [
      {
        cost: {
          min: 2,
          max: 2,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Precognitive Hunch',
        entries: [
          'As a bonus action, you open yourself to receive momentary insights that improve your odds of success; until your {@status concentration} ends, whenever you make an attack roll, a saving throw, or an ability check, you roll a {@dice d4} and add it to the total.',
        ],
      },
      {
        cost: {
          min: 3,
          max: 3,
        },
        name: 'All-Around Sight',
        entries: [
          'In response to an attack hitting you, you use your reaction to impose disadvantage on that attack roll, possibly causing it to miss.',
        ],
      },
      {
        cost: {
          min: 5,
          max: 5,
        },
        concentration: {
          duration: 8,
          unit: 'hr',
        },
        name: 'Danger Sense',
        entries: [
          "As an action, you create a psychic model of reality in your mind and set it to show you a few seconds into the future. Until your {@status concentration} ends, you can't be {@quickref Surprise|PHB|3|0|surprised}, attack rolls against you can't gain advantage, and you gain a +10 bonus to initiative.",
        ],
      },
      {
        cost: {
          min: 7,
          max: 7,
        },
        name: 'Victory Before Battle',
        entries: [
          'When you roll initiative, you can use this ability to grant yourself and up to five creatures of your choice within 60 feet of you a +10 bonus to initiative.',
        ],
      },
    ],
  },
  {
    name: 'Psionic Restoration',
    source: 'UATheMysticClass',
    page: 23,
    type: 'D',
    order: 'Immortal',
    entries: ['You wield psionic energy to cure wounds and restore health to yourself and others.'],
    focus:
      'While focused on this discipline, you can use a bonus action to touch a creature that has 0 hit points and stabilize it.',
    modes: [
      {
        cost: {
          min: 1,
          max: 7,
        },
        name: 'Mend Wounds',
        entries: [
          'As an action, you can spend psi points to restore hit points to one creature you touch. The creature regains {@scaledice 1d8|1-7|1d8|psi} hit points per psi point spent.',
        ],
      },
      {
        cost: {
          min: 3,
          max: 3,
        },
        name: 'Restore Health',
        entries: [
          'As an action, you touch one creature and remove one of the following conditions from it: {@condition blinded}, {@condition deafened}, {@condition paralyzed}, or {@condition poisoned}. Alternatively, you remove one disease from the creature.',
        ],
      },
      {
        cost: {
          min: 5,
          max: 5,
        },
        name: 'Restore Life',
        entries: [
          "As an action, you touch one creature that has died within the last minute. The creature returns to life with 1 hit point. This ability can't return to life a creature that has died of old age, nor can it restore a creature missing any vital body parts.",
        ],
      },
      {
        cost: {
          min: 7,
          max: 7,
        },
        name: 'Restore Vigor',
        entries: [
          'As an action, you can touch one creature and choose one of the following: remove any reductions to one of its ability scores, remove one effect that reduces its hit point maximum, or reduce its {@condition exhaustion} level by one.',
        ],
      },
    ],
  },
  {
    name: 'Psionic Weapon',
    source: 'UATheMysticClass',
    page: 24,
    type: 'D',
    order: 'Immortal',
    entries: ['You have learned how to channel psionic energy into your attacks, lending them devastating power.'],
    focus:
      "Whenever you focus on this discipline, choose one weapon you're holding or your unarmed strike. When you attack with it while focused on this discipline, its damage is psychic and magical, rather than its normal damage type. Until you reach 6th level as a mystic, you don't add your Strength or Dexterity modifier to the psychic attack's damage rolls.",
    modes: [
      {
        cost: {
          min: 1,
          max: 1,
        },
        name: 'Ethereal Weapon',
        entries: [
          "As a bonus action, you temporarily transform one weapon you're holding or your unarmed strike into pure psionic energy. The next attack you make with it before the end of your turn ignores the target's armor, requiring no attack roll. Instead, the target makes a Dexterity saving throw against this discipline. On a failed save, the target takes the attack's normal damage and suffers its additional effects. On a successful save, the target takes half damage from the attack but suffers no additional effects that would normally be imposed on a hit.",
        ],
      },
      {
        cost: {
          min: 1,
          max: 7,
        },
        name: 'Lethal Strike',
        entries: [
          "As a bonus action, you imbue a weapon you're holding or your unarmed strike with psychic energy. The next time you hit with it before the end of your turn, it deals an extra {@scaledamage 1d10|1-7|1d10|psi} psychic damage per psi point spent.",
        ],
      },
      {
        cost: {
          min: 5,
          max: 5,
        },
        concentration: {
          duration: 10,
          unit: 'min',
        },
        name: 'Augmented Weapon',
        entries: [
          'As a bonus action, touch one {@filter simple or martial weapon|items|source=phb|category=basic|type=martial weapon;simple weapon}. Until your {@status concentration} ends, that weapon becomes a magic weapon with a +3 bonus to its attack and damage rolls.',
        ],
      },
    ],
  },
  {
    name: 'Psychic Assault',
    source: 'UATheMysticClass',
    page: 24,
    type: 'D',
    order: 'Awakened',
    entries: ['You wield your mind like a weapon, unleashing salvos of psionic energy.'],
    focus:
      'While focused on this discipline, you gain a +2 bonus to damage rolls with psionic talents that deal psychic damage.',
    modes: [
      {
        cost: {
          min: 1,
          max: 7,
        },
        name: 'Psionic Blast',
        entries: [
          'As an action, choose one creature you can see within 60 feet of you. The target takes {@scaledamage 1d8|1-7|1d8|psi} psychic damage per psi point spent on this ability.',
        ],
      },
      {
        cost: {
          min: 3,
          max: 3,
        },
        name: 'Ego Whip',
        entries: [
          'As an action, choose one creature you can see within 60 feet of you. The target must make an Intelligence saving throw. On a failed save, the creature takes {@damage 3d8} psychic damage, and it is filled with self-doubt, leaving it able to use its action on its next turn only to take the Dodge, Disengage, or Hide action. On a successful saving throw, it takes half as much damage.',
        ],
      },
      {
        cost: {
          min: 5,
          max: 5,
        },
        name: 'Id Insinuation',
        entries: [
          'As an action, choose one creature you can see within 60 feet of you. The target must make an Intelligence saving throw. On a failed save, the creature takes {@damage 5d8} psychic damage, and it goes into a fury, as its id runs rampant. On its next turn, it can use its action only to take the Dodge or Attack action. On a successful save, it takes half as much damage.',
        ],
      },
      {
        cost: {
          min: 6,
          max: 6,
        },
        name: 'Psychic Blast',
        entries: [
          'As an action, you unleash devastating psychic energy in a 60-foot cone. Each creature in that area must make an Intelligence saving throw, taking {@damage 8d8} psychic damage on a failed save, or half as much damage on a successful one. You can increase the damage by {@scaledamage 8d8|6-7|2d8|psi} if you spend 1 more psi point on this ability.',
        ],
      },
      {
        cost: {
          min: 7,
          max: 7,
        },
        name: 'Psychic Crush',
        entries: [
          'As an action, you create a 20-foot cube of psychic energy within 120 feet of you. Each creature in that area must make an Intelligence saving throw. On a failed save, a target takes {@damage 8d8} psychic damage and is {@condition stunned} until the end of your next turn. On a successful save, a target takes half as much damage.',
        ],
      },
    ],
  },
  {
    name: 'Psychic Disruption',
    source: 'UATheMysticClass',
    page: 24,
    type: 'D',
    order: 'Awakened',
    entries: ["You create psychic static that disrupts other creatures' ability to think clearly."],
    focus: 'While focused on this discipline, you have advantage on Charisma ({@skill Deception}) checks.',
    modes: [
      {
        cost: {
          min: 1,
          max: 7,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Distracting Haze',
        entries: [
          "As an action, choose one creature you can see within 60 feet of you. That creature must make an Intelligence saving throw. On a failed save, it takes {@scaledamage 1d10|1-7|1d10|psi} psychic damage per psi point spent and can't see anything more than 10 feet from it until your {@status concentration} ends. On a successful save, it takes half as much damage.",
        ],
      },
      {
        cost: {
          min: 3,
          max: 3,
        },
        name: 'Daze',
        entries: [
          'As an action, choose one creature you can see within 60 feet of you. That creature must make an Intelligence saving throw. On a failed save, the target is {@condition incapacitated} until the end of your next turn or until it takes any damage.',
        ],
      },
      {
        cost: {
          min: 5,
          max: 5,
        },
        name: 'Mind Storm',
        entries: [
          'As an action, choose a point you can see within 60 feet of you. Each creature in a 20-foot-radius sphere centered on that point must make a Wisdom saving throw. On a failed save, a target takes {@damage 6d8} psychic damage and suffers disadvantage on all saving throws until the end of your next turn. On a successful save, a creature takes half as much damage. You can increase the damage by {@scaledamage 6d8|5-7|1d6|psi} per additional psi point spent on this ability.',
        ],
      },
    ],
  },
  {
    name: 'Psychic Hammer',
    source: 'UATheMysticClass',
    page: 28,
    type: 'T',
    entries: [
      "As an action, you try to grasp one creature you can see within 120 feet of you, with a hand crafted from telekinetic energy. The target must succeed on a Strength saving throw or take {@damage 1d6} force damage. If it takes any of this damage and is Large or smaller, you can move it up to 10 feet in a straight line in a direction of your choice. You can't lift the target off the ground unless it is already airborne or underwater.",
      "The talent's damage increases by {@dice 1d6} when you reach 5th level ({@damage 2d6}), 11th level ({@damage 3d6}), and 17th level ({@damage 4d6}).",
    ],
  },
  {
    name: 'Psychic Inquisition',
    source: 'UATheMysticClass',
    page: 25,
    type: 'D',
    order: 'Awakened',
    entries: ["You reach into a creature's mind to uncover information or plant ideas within it."],
    focus: 'While focused on this discipline, you know when a creature communicating with you via telepathy is lying.',
    modes: [
      {
        cost: {
          min: 1,
          max: 7,
        },
        name: 'Hammer of Inquisition',
        entries: [
          'As an action, choose one creature you can see within 60 feet of you. The target must make an Intelligence saving throw. On a failed save, it takes {@scaledamage 1d10|1-7|1d10|psi} psychic damage per psi point spent and suffers disadvantage on its next Wisdom saving throw before the end of your next turn. On a successful save, it takes half as much damage.',
        ],
      },
      {
        cost: {
          min: 2,
          max: 2,
        },
        name: 'Forceful Query',
        entries: [
          'As an action, you ask a question of one creature that can see and hear you within 30 feet of you. The question must be phrased so that it can be answered with a yes or no, otherwise this ability fails. The target must succeed on a Wisdom saving throw, or it replies with a truthful answer. A creature is immune to this ability if it is immune to being {@condition charmed}.',
        ],
      },
      {
        cost: {
          min: 5,
          max: 5,
        },
        concentration: {
          duration: 1,
          unit: 'hr',
        },
        name: 'Ransack Mind',
        entries: [
          "While you concentrate on this ability, you probe one creature's mind. The creature must remain within 30 feet of you, and you must be able to see it. If you reach the ability's full duration, the target must make three Intelligence saving throws, and you learn information from it based on the number of saving throws it fails. With one failed saving throw, you learn its key memories from the past 12 hours. With two failed saving throws, you learn its key memories from the past 24 hours. With three failed saving throws, you learn its key memories from the past 48 hours.",
        ],
      },
      {
        cost: {
          min: 6,
          max: 6,
        },
        concentration: {
          duration: 1,
          unit: 'hr',
        },
        name: 'Phantom Idea',
        entries: [
          'While you concentrate on this ability, you probe one creature\'s mind. The creature must remain within 30 feet of you, and you must be able to see it. If you reach the ability\'s full duration, the target must make three Intelligence saving throws, and you plant a memory or an idea in it, which lasts for a number of hours based on the number of saving throws it fails. You choose whether the idea or memory is trivial (such as "I had porridge for breakfast" or "Ale is the worst") or personality-defining ("I failed to save my village from orc marauders and am therefore a coward" or "Magic is a scourge, so I renounce it"). With one failed saving throw, the idea or memory lasts for the next 4 hours. With two failed saving throws, it lasts for 24 hours. With three failed saving throws, it lasts for 48 hours.',
        ],
      },
    ],
  },
  {
    name: 'Psychic Phantoms',
    source: 'UATheMysticClass',
    page: 25,
    type: 'D',
    order: 'Awakened',
    entries: ["Your power reaches into a creature's mind and causes it false perceptions."],
    focus: 'While focused on this discipline, you have advantage on Charisma ({@skill Deception}) checks.',
    modes: [
      {
        cost: {
          min: 1,
          max: 7,
        },
        name: 'Distracting Figment',
        entries: [
          "As an action, choose one creature you can see within 60 feet of you. The target must make an Intelligence saving throw. On a failed save, it takes {@scaledamage 1d10|1-7|1d10|psi} psychic damage per psi point spent and thinks it perceives a threatening creature just out of its sight; until the end of your next turn, it can't use reactions, and melee attack rolls against it have advantage. On a successful save, it takes half as much damage.",
        ],
      },
      {
        cost: {
          min: 3,
          max: 3,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Phantom Foe',
        entries: [
          "As an action, choose one creature you can see within 60 feet of you. The target must make an Intelligence saving throw. On a failed save, it perceives a horrid creature adjacent to it until your {@status concentration} ends. During this time, the target can't take reactions, and it takes {@damage 1d8} psychic damage at the start of each of its turns. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. You can increase the damage by {@scaledamage 1d8|3-7|1d8|psi} for each additional psi point spent on the ability.",
        ],
      },
      {
        cost: {
          min: 5,
          max: 5,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Phantom Betrayal',
        entries: [
          "As an action, you plant delusional paranoia in a creature's mind. Choose one creature you can see within 60 feet of you. The target must succeed on an Intelligence saving throw, or until your {@status concentration} ends, it must target its allies with attacks and other damaging effects. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. A creature is immune to this ability if it is immune to being {@condition charmed}.",
        ],
      },
      {
        cost: {
          min: 7,
          max: 7,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Phantom Riches',
        entries: [
          "As an action, you plant the phantom of a greatly desired object in a creature's mind. Choose one creature you can see within 60 feet of you. The target must make an Intelligence saving throw. On a failed save, you gain partial control over the target's behavior until your {@status concentration} ends; the target moves as you wish on each of its turns, as it thinks it pursues the phantom object it desires. If it hasn't taken damage since its last turn, it can use its action only to admire the object you created in its perception. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        ],
      },
    ],
  },
  {
    name: 'Telepathic Contact',
    source: 'UATheMysticClass',
    page: 26,
    type: 'D',
    order: 'Awakened',
    entries: [
      'By channeling psionic power, you gain the ability to control other creatures by substituting your will for their own.',
    ],
    focus:
      "While focused on this discipline, you gain the ability to use your Telepathy class feature with up to six creatures at once. If you don't have that feature from the mystic class, you instead gain it while focused on this discipline.",
    modes: [
      {
        cost: {
          min: 2,
          max: 2,
        },
        name: 'Exacting Query',
        entries: [
          "As an action, you target one creature you can communicate with via telepathy. The target must make an Intelligence saving throw. On a failed save, the target truthfully answers one question you ask it via telepathy. On a successful save, the target is unaffected, and you can't use this ability on it again until you finish a long rest. A creature is immune to this ability if it is immune to being {@condition charmed}.",
        ],
      },
      {
        cost: {
          min: 2,
          max: 2,
        },
        name: 'Occluded Mind',
        entries: [
          "As an action, you target one creature you can communicate with via telepathy. The target must make an Intelligence saving throw. On a failed save, the target believes one statement of your choice for the next 5 minutes that you communicate to it via telepathy. The statement can be up to ten words long, and it must describe you or a creature or an object the target can see. On a successful save, the target is unaffected, and you can't use this ability on it again until you finish a long rest. A creature is immune to this ability if it is immune to being {@condition charmed}.",
        ],
      },
      {
        cost: {
          min: 5,
          max: 5,
        },
        name: 'Broken Will',
        entries: [
          "As an action, you target one creature you can communicate with via telepathy. The target must make an Intelligence saving throw. On a failed save, you choose the target's movement and action on its next turn. On a successful save, the target is unaffected, and you can't use this ability on it again until you finish a long rest. A creature is immune to this ability if it is immune to being {@condition charmed}.",
        ],
      },
      {
        cost: {
          min: 6,
          max: 6,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Psychic Grip',
        entries: [
          "As an action, you target one creature you can see within 60 feet of you. The target must succeed on an Intelligence saving throw, or it is {@condition paralyzed} until your {@status concentration} ends. At the end of each of its turns, it can repeat the saving throw. On a success, this effect ends. On a failure, you can use your reaction to force the target to move up to half its speed, even though it's {@condition paralyzed}.",
        ],
      },
      {
        cost: {
          min: 7,
          max: 7,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Psychic Domination',
        entries: [
          "As an action, you target one creature you can see within 60 feet of you. The target must succeed on an Intelligence saving throw, or you choose the creature's actions and movement on its turns until your {@status concentration} ends. At the end of each of its turns, it can repeat the saving throw, ending the effect on itself on a success. A creature is immune to this ability if it is immune to being {@condition charmed}.",
        ],
      },
    ],
  },
  {
    name: 'Third Eye',
    source: 'UATheMysticClass',
    page: 26,
    type: 'D',
    order: 'Nomad',
    entries: [
      'You create a third, psychic eye in your mind, which you cast out into the world. It channels thoughts and knowledge back to you, greatly enhancing your senses.',
    ],
    focus:
      'While focused on this discipline, you have darkvision with a range of 60 feet. If you already have darkvision with that range or greater, increase its range by 10 feet.',
    modes: [
      {
        cost: {
          min: 2,
          max: 2,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Tremorsense',
        entries: [
          'As a bonus action, you gain tremorsense with a radius of 30 feet, which lasts until your {@status concentration} ends.',
        ],
      },
      {
        cost: {
          min: 2,
          max: 2,
        },
        name: 'Unwavering Eye',
        entries: ['As a bonus action, you gain advantage on Wisdom checks for 1 minute.'],
      },
      {
        cost: {
          min: 3,
          max: 3,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Piercing Sight',
        entries: [
          'As a bonus action, you gain the ability to see through objects that are up to 1 foot thick within 30 feet of you. This sight lasts until your {@status concentration} ends.',
        ],
      },
      {
        cost: {
          min: 5,
          max: 5,
        },
        concentration: {
          duration: 1,
          unit: 'min',
        },
        name: 'Truesight',
        entries: [
          'As a bonus action, you gain truesight with a radius of 30 feet, which lasts until your {@status concentration} ends.',
        ],
      },
    ],
  },
];
