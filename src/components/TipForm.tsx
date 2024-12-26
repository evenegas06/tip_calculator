import { TIP_OPTIONS } from '../contants';

type TipFormProps = {
	setTip: React.Dispatch<React.SetStateAction<number>>;
	tip: number;
};

const TipForm = ({ setTip, tip }: TipFormProps) => {
	return (
		<div>
			<h3 className="text-2xl font-black">Propina:</h3>

			<form>
				{TIP_OPTIONS.map((item) => (
					<div
						key={item.id}
						className="flex gap-2"
					>
						<label htmlFor={item.id}>{item.label}</label>
						<input
							type="radio"
							name="tip"
							id={item.id}
							value={item.value}
							onChange={(event) => setTip(Number(event.target.value))}
							checked={item.value === tip}
						/>
					</div>
				))}
			</form>
		</div>
	);
};
export default TipForm;
