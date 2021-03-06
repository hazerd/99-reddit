/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_MODE = '99-reddit/App/CHANGE_MODE';
export const LOAD_POST = '99-reddit/App/LOAD_POST';
export const LOAD_POST_SUCCESS = '99-reddit/App/LOAD_POST_SUCCESS';
export const LOAD_POST_ERROR = '99-reddit/App/LOAD_POST_ERROR';
export const LOAD_POSTS = '99-reddit/App/LOAD_POSTS';
export const LOAD_POSTS_SUCCESS = '99-reddit/App/LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_ERROR = '99-reddit/App/LOAD_POSTS_ERROR';
export const DEFAULT_LOCALE = 'en';
