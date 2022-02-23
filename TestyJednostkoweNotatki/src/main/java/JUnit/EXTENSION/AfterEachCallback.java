package JUnit.EXTENSION;

import org.junit.jupiter.api.extension.ExtensionContext;

public class AfterEachCallback implements org.junit.jupiter.api.extension.AfterEachCallback {
    @Override
    public void afterEach(ExtensionContext extensionContext) throws Exception {
        System.out.println("AfterEachCallback");
    }
}
