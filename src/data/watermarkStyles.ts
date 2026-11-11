export type StyleTier = "basic" | "pro";
export interface WatermarkStyle {
  id: string;
  file: string;
  tier: StyleTier;
  name: string;
  description: string;
  tagline: string;
  alt: string;
  width: number;
  height: number;
}
export const watermarkStyles: WatermarkStyle[] = [
  {
    id: "classic",
    file: "classic.jpg",
    tier: "basic",
    name: "经典影像",
    description: "品牌、参数与描述，让每个瞬间都有完整的记录。",
    tagline: "品牌、参数与描述",
    alt: "经典影像水印，白色底框中展示品牌、标题和相机参数",
    width: 1280,
    height: 1313,
  },
  {
    id: "hasselblad",
    file: "hasselblad.jpg",
    tier: "basic",
    name: "哈苏签名",
    description: "简洁签名与相机标识，给画面更多呼吸的空间。",
    tagline: "简洁签名与相机标识",
    alt: "哈苏签名水印，用简洁相机标识点缀花园照片",
    width: 1280,
    height: 855,
  },
  {
    id: "postage-stamp",
    file: "postage-stamp.jpg",
    tier: "pro",
    name: "旅行邮票",
    description: "用邮票画框、地点和拍摄时间，收藏旅途中的一站。",
    tagline: "把旅行装进一枚邮票",
    alt: "旅行邮票水印，带有齿孔边框、地点和日期",
    width: 1280,
    height: 1871,
  },
  {
    id: "centered-camera",
    file: "centered-camera.jpg",
    tier: "basic",
    name: "留白经典",
    description: "居中品牌与拍摄参数，以留白衬托影像。",
    tagline: "留一点白，给画面呼吸",
    alt: "留白经典水印，照片下方居中排列品牌与拍摄参数",
    width: 1049,
    height: 922,
  },
  {
    id: "hasselblad-frame",
    file: "hasselblad-frame.jpg",
    tier: "pro",
    name: "哈苏画框",
    description: "带画框的签名布局，让照片像一张收藏级画片。",
    tagline: "为喜欢的照片，认真装裱",
    alt: "哈苏画框水印，画框与签名环绕花园照片",
    width: 1280,
    height: 1220,
  },
  {
    id: "profile-camera",
    file: "profile-camera.jpg",
    tier: "pro",
    name: "个人相机",
    description: "个人信息与拍摄参数，让照片拥有你的署名。",
    tagline: "镜头之后，也有你的名字",
    alt: "个人相机水印，展示个人署名和照片拍摄信息",
    width: 1280,
    height: 1010,
  },
  {
    id: "airmail-stamp",
    file: "airmail-stamp.jpg",
    tier: "pro",
    name: "航空邮票",
    description: "四边齿孔、标题、地点与日期，像一封来自远方的信。",
    tagline: "一封来自远方的影像来信",
    alt: "航空邮票水印，四边齿孔搭配标题、地点和日期",
    width: 1280,
    height: 1871,
  },
  {
    id: "minimal-camera",
    file: "minimal-camera.jpg",
    tier: "pro",
    name: "留白纪实",
    description: "左对齐相机标识与拍摄参数，安静地记录真实。",
    tagline: "让记录，回到简单",
    alt: "留白纪实水印，左对齐相机标识与照片参数",
    width: 1206,
    height: 1007,
  },
];
