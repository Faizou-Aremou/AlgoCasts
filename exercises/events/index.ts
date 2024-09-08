// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

export class Events {
  private events = new Map<string, (() => void)[]>();
  // Register an event handler
  on(eventName: string, callback: () => void) {
    this.events.set(eventName, [
      ...(this.events.get(eventName) ?? []),
      callback,
    ]);
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName: string) {
    (this.events.get(eventName) ?? []).forEach((fn) => {
      fn();
    });
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName: string) {
    this.events.delete(eventName);
  }
}
