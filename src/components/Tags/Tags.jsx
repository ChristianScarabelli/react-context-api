import style from './Tags.module.css';

export default function Tags({ tags = [], className }) {
    return (
        tags.length > 0 && ( // Mostro i tag solo se esistono
            <div className='d-flex align-items-center flex-wrap gap-2 text-white'>
                {tags.map((tag, index) => {
                    const formattedTag = tag.toLowerCase().replaceAll(' ', '_')      // Formattazione del tag
                    return (
                        <span
                            key={index}
                            className={`badge ${style[`tag_${formattedTag}`]}`}    // Classe dinamica basata sul tag formattato
                        >
                            {tag}
                        </span>
                    )
                })}
            </div>
        ))
}
