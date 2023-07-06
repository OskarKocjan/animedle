import "./styled.scss";
import {
  CardTileProps,
  CardTileTypes,
  CardTileInequality,
} from "models/CardModel";
import ForwardIcon from "@mui/icons-material/Forward";

const CardTile = ({ name, data, type, classes, arrow }: CardTileProps) => {
  return (
    <div className={`CardTile bg-primary ${classes}`}>
      {name === undefined && (
        <img src={data as string} alt='anime' className='btl-1' />
      )}
      <div className='card-title'>{name}</div>

      <div className='card-data'>
        {type === CardTileTypes.number &&
          arrow !== CardTileInequality.equal && (
            <ForwardIcon className={`${arrow}`} />
          )}
        {(type === CardTileTypes.number || type === CardTileTypes.string) &&
          name !== undefined && (
            <div className='single-data'>
              <span>{data}</span>
            </div>
          )}
        {type === CardTileTypes.array && (
          <ul>
            {(data as string[]).map((e) => {
              return <li>{e},</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CardTile;
