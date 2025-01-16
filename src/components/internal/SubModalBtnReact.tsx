import subModalOpenHandler from 'src/helpers/subModalOpenHandler';

interface Props extends React.ComponentPropsWithoutRef<'button'> {}
export default function ({ children, id = '', className, ...btnAttrs }: Props) {
  return (
    <button
      {...btnAttrs}
      type="button"
      onClick={() => subModalOpenHandler(id)}
      className={className}>
      {children}
    </button>
  );
}
