import Button from './Button';

const props = {
  text: '삭제하기',
  type: 'delete',
};

export default function Modal(props) {
  return (
    <div>
      <Button {...props} />
    </div>
  );
}
