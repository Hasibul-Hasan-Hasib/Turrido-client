const logger = (store) => (next) => (action) => {
    const currentState = store.getState();
    console.log('Current state:', currentState);
    console.log('Action:', action);

    next(action);
    console.log('Next state:', store.getState());
}

export default logger;