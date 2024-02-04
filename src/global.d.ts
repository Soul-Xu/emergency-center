// 在 DrawioEditor.js 或者其他 TypeScript 文件中添加这个声明
declare global {
  interface Window {
    drawio: {
      createEditor: Function;
      Event: {
        SAVE: string;
        CLICK: string;
        // 其他事件类型...
      };
      // 其他 drawio 对象的属性和方法...
    };
  }
}