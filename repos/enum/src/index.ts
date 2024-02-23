enum HumanTypeEnum {
  NOT_HUMAN,
  NORMAL,
  DEMI_GOD,
  GOD,
}

type HumanType = keyof typeof HumanTypeEnum;

interface Human {
  name: string;
  enum_type: HumanTypeEnum;
  type: HumanType;
}

function checkHumanTypeEnum(human: Human): void {
  switch (human.enum_type) {
    case HumanTypeEnum.NOT_HUMAN:
      console.log(`${human.name} is not human.`);
      break;
    case HumanTypeEnum.NORMAL:
      console.log(`${human.name} is normal human.`);
      break;
    case HumanTypeEnum.DEMI_GOD:
      console.log(`${human.name} is demi god.`);
      break;
    case HumanTypeEnum.GOD:
      console.log(`${human.name} is god.`);
      break;
  }
}

function checkHumanType(human: Human): void {
  switch (human.type) {
    case "NOT_HUMAN":
      console.log(`${human.name} is not human.`);
      break;
    case "NORMAL":
      console.log(`${human.name} is normal human.`);
      break;
    case "DEMI_GOD":
      console.log(`${human.name} is demi god.`);
      break;
    case "GOD":
      console.log(`${human.name} is god.`);
      break;
  }
}

const humans = [
  {
    name: "쑤레기",
    enum_type: HumanTypeEnum.NOT_HUMAN,
    type: "NOT_HUMAN",
  },
  {
    name: "응애",
    enum_type: HumanTypeEnum.DEMI_GOD,
    type: "DEMI_GOD",
  },
];
