# HTML5特色

## 语义化标签

- article: 定义外部内容，如一篇文档
- aside: 定义article标签元素以外的内容，其内容可以作为文档的侧边栏
- figure: 用于对元素进行组合，使用figcaption元素为元素组添加标题
- figcaption: 定义figure元素的标题
- header: 定义文档页眉
- footer: 定义文档页脚
- section: 定义文档中的节
- hgroup: 用于对section或网页的标题进行组合，使用figcaption标签元素为元素组添加标题
- nav: 定义导航链接部分
- time: 定义日期或时间

## CSS3新特性

如圆角、阴影、旋转、动画、背景渐变、多重背景、图片边框背景、防止字符串长度溢出等

- RGBa: 对每个元素的色彩、透明度进行设置
- 多栏布局选择器: 不需要传统的html布局标签就可以生成多栏布局，同时其栏数、栏宽、栏间距均可定义
- 圆角: 任何html标签元素，大小尺寸风格均可定义
- @font-face: 如果网页定义了某种本机未安装的字体，CSS3提供的@font-face会自动在后台从网络上下载相应的字体

## 画布canvas

可以使用javascript在画布内绘制图像，画布canvas标签拥有多种绘图方法，如路径、矩形、圆形、字符、添加图像等

canvas元素的绘图方法都没有定义在canvas标签元素本身上，而是定义在通过画布的getContext()方法获得的一个绘图环境对象上。canvas标签元素没有对绘制文本提供任何支持，如果想再画布中加入文本，则需要绘制文本后与画布进行组合，或者在画布上方使用css定位来覆盖html文本。

## WOFF

Web开放字体格式(Web Open Font Format)。不但能够通过有效的压缩来减小文档，同时不包含加密，也不受DRM的限制。

MIME类型为`application/x-font-woff`


