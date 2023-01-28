package com.ws.bbold.exception;

import java.io.Serial;

public class ObjectNotFoundException extends RuntimeException {
    @Serial private static final long serialVersionUID = 1L;

    public ObjectNotFoundException(ObjectNotFoundType objectType, Long id) {
        super(String.format("Object of type: [%s] with and id: [%d] not found", objectType.name(), id));
    }
}
