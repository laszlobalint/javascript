// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.
// Register an event handler
// Trigger all callbacks associated
// with a given eventName
// Remove all event handlers associated
// with the given eventName

class Events {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    this.events[eventName] ? this.events[eventName].push(callback) : (this.events[eventName] = [callback]);
  }

  trigger(eventName) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((cb) => cb());
    }
  }

  off(eventName) {
    delete this.events[eventName];
  }
}

module.exports = Events;
