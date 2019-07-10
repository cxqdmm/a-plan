import { ipcRenderer } from 'electron';
class IpcEvent {
  /**
   * @param {*} sendEventName 
   * @param {*} receiveEventName 
   */
  constructor({sendEventName,receiveEventName}) {
    if (!sendEventName || !receiveEventName) {
      throw new Error('EventListener should be created by new EventListener({sendEventName,receiveEventName})')
    }
    this.eventId = 1;
    this.eventMap = new Map();
    this.sendEventName = sendEventName;
    this.receiveEventName = receiveEventName;
    ipcRenderer.on(receiveEventName, (event, id, value) => {
      const handler = this.eventMap.get(id);
      if (handler) {
        handler.resolve(value);
      }
    })
  }

  send(...params) {
    let handler = {};
    const promise = new Promise((resolve, reject) => {
      handler.resolve = resolve;
      handler.reject = reject;
    })
    ipcRenderer.send(this.sendEventName,this.eventId, ...params);
    this.eventMap.set(this.eventId, handler);
    this.eventId += 1;
    return promise;
  }

} 
export {
  IpcEvent  
}