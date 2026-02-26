interface AppState{
  folders: any,
  decks: any,
  cards: any[]
}

interface Action {
  type: 'ADD_FOLDER' | 'DELETE_FOLDER' | 'RENAME_FOLDER'
  payload?: any
}