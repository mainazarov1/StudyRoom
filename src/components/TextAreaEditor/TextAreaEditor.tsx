import { FC, useMemo, useState } from 'react';
import { EditorState } from 'draft-js';

export type EditorApi = {
  state: EditorState;
  onChange: (state: EditorState) => void;
}

export const useEditor = (): EditorApi => {
  const [state, setState] = useState(() => EditorState.createEmpty());
  
  return useMemo(() => ({
    state,
    onChange: setState
  }), [state])
}

export type EditorApi = {
  ...
  toggleBlockType: (blockType: BlockType) => void;
}

export const useEditor = (html?: string): EditorApi => {
    ...
    const toggleBlockType = React.useCallback((blockType: BlockType) => {
      setState((currentState) => RichUtils.toggleBlockType(currentState, blockType))
    }, []);
    ...
}
const TextAreaEditor: FC = () => {
  return (
    <div>
      
    </div>
  );
};

export default TextAreaEditor;