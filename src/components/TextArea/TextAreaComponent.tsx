import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import { FC, useState } from 'react';
import { 
  BoldOutlined,
  FontSizeOutlined,
  ItalicOutlined,
  OrderedListOutlined,
  StrikethroughOutlined,
  UnderlineOutlined,
  UnorderedListOutlined 
} from '@ant-design/icons';
import parse from 'html-react-parser';

import s from './TextAreaComponent.module.scss';


const MenuBar:FC<any> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className={s.menuBar}>
      <div className={s.style_btns}>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? s.is_active : null}
        >
          <BoldOutlined />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? s.is_active : null}
        >
          <ItalicOutlined />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive('underline') ? s.is_active : null}
        >
          <UnderlineOutlined />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? s.is_active : null}
        >
          <StrikethroughOutlined />
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive('heading', { level: 2 }) ? s.is_active : null
          }
        >
          <FontSizeOutlined />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? s.is_active : null}
        >
          <UnorderedListOutlined />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? s.is_active : null}
        >
          <OrderedListOutlined />
        </button>
      </div>
    </div>
  );
};
interface IProps {
  setStateShow: (arm: string ) => void
  content?: string;
}

export const Tiptap: FC<IProps> = ({ setStateShow, content }) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: content,

    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setStateShow(html);
    },
  });

  return (
    <div className={s.textEditor}>
      <EditorContent editor={editor} className={s.editor_content} />
      <MenuBar editor={editor} />
    </div>
  );
};
