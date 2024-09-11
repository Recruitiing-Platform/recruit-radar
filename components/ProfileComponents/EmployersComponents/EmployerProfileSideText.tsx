type Props = {
  header: string;
  subheader: string;
  className?: string;
};

const EmployerProfileSideText = (props: Props) => {
  return (
    <div className={props.className}>
      <span className="font-recSemiBold pb-3 block">{props.header}</span>
      <span className="font-recRegular text-textSmall">
        {props.subheader}
      </span>
    </div>
  );
};

export default EmployerProfileSideText;
