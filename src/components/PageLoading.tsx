//styles
import "../styles/components/pageLoading.sass"

//assets
import loading from "../assets/loading.gif"

const PageLoading = () => {
  return (
    <div className="pageLoading">
        <img src={loading} alt="loading-gif" />
    </div>
  )
}

export default PageLoading