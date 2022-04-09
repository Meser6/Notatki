import org.junit.jupiter.api.extension.AfterTestExecutionCallback;
import org.junit.jupiter.api.extension.ExtensionContext;

public class ScreenshotHelper implements AfterTestExecutionCallback {

    public boolean isFiled;

    //Jeżeli test Nie przejdzie lub sie wysypie to zwroci true do isFiled;
    @Override
    public void afterTestExecution(ExtensionContext extensionContext) throws Exception {
        if (extensionContext.getExecutionException().isPresent()) {
            isFiled = true;
        } else isFiled = false;
    }
}
