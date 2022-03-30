import './MovieForm.css'
import useField from "../hooks/useField";

function MovieForm() {
    const titleInput = useField('text');
    const descriptionInput = useField('textArea');
    const sourceInput = useField('text');
    const subtitleInput = useField('text');
    const thumbInput = useField('text');
    const genreInput = useField('text');

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        console.log('OnSubmitCalled')
        try {
            const response = await fetch('http://0.0.0.0:8000/movies', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: titleInput.value,
                    description: descriptionInput.value,
                    sources: [sourceInput.value],
                    subtitle: subtitleInput.value,
                    thumb: thumbInput.value,
                    genre: genreInput.value
                })
            })
            const body = await response.json();
            console.log('Status: ' + response.status);
            console.log('New Movie: ', body)
        } catch (error) {
            console.log(error);
        } finally {
            titleInput.reset();
            descriptionInput.reset();
            sourceInput.reset();
            subtitleInput.reset();
            thumbInput.reset();
            genreInput.reset();
        }
    }

    return (
        <div className="MovieForm">
            <header className="MovieForm-header">
                Create a new Movie
            </header>
            <form className="MovieForm" onSubmit={onSubmitHandler}>
                <label className="MovieFormElement">Title:
                    <input type={titleInput.type} value={titleInput.value} onChange={titleInput.onChange} />
                </label>
                <label className="MovieFormElement">Description:
                    <input type={descriptionInput.type} value={descriptionInput.value} onChange={descriptionInput.onChange} />
                </label>
                <label className="MovieFormElement">Source:
                    <input type={sourceInput.type} value={sourceInput.value} onChange={sourceInput.onChange} />
                </label>
                <label className="MovieFormElement">Subtitle:
                    <input type={subtitleInput.type} value={subtitleInput.value} onChange={subtitleInput.onChange} />
                </label>
                <label className="MovieFormElement">Thumb:
                    <input type={thumbInput.type} value={thumbInput.value} onChange={thumbInput.onChange} />
                </label>
                <label className="MovieFormElement">Genre:
                    <input type={genreInput.type} value={genreInput.value} onChange={genreInput.onChange} />
                </label>
                <button className="MovieFormButton MovieFormElement" type="submit">Add movie entry</button>
            </form>
        </div>
    );
}

export default MovieForm;
