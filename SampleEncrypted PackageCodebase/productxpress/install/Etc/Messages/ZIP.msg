<?xml version = "1.0" ?>
<MessageModule name = "ZIP">
	<Message id = "SLICEDBUF_ALREADY_ATTACHED"
		message = "Cannot attach stream: already attached."
    />
	<Message id = "SLICEDBUF_SEEKPOS"
		message = "Could not set position for source buffer."
    />
	<Message id = "SLICEDBUF_READ"
		message = "No data from source buffer."
    />
	<Message
		     id = "INSUFFICIENT_DATA"
		message = "Unexpectedly reached end of archive while reading %1 bytes of data; file may be corrupt."
    />
	<Message
		     id = "WRITE_ARCHIVE"
		message = "Could not write data to archive."
    />
	<Message
		     id = "BAD_POSITION"
		message = "Could not find position (%1) in archive; file may be corrupt."
    />
	<Message
		     id = "READ_EOCDR"
		message = "Problem while reading end of central directory record; file may be corrupt."
    />
	<Message
		     id = "READ_CDIR_ENTRY"
		message = "Problem while reading central directory file entry; file may be corrupt."
    />
	<Message
		     id = "READ_CENTRALDIR"
		message = "Problem while reading central directory; file may be corrupt."
    />
	<Message
		     id = "BAD_SIGNATURE"
		message = "Wrong signature: should be %1 but got %2; file may be corrupt."
    />
	<Message
		     id = "NOCD_FOUND"
		message = "No central directory found; file may be corrupt."
    />
	<Message
		     id = "BAD_ENCODING"
		message = "UNKNOWN/UNSUPPORTED encoding for entry '%1'"
		   type = "user"
    />
	<Message
		     id = "STREAMING_NOT_SUPPORTED"
		message = "Cannot find next entry from streamed entry '%1'."
		   type = "user"
    />
	<Message
		     id = "ZIP_OPEN"
		message = "Error occurred when trying to open archive '%1'"
		   type = "user"
    />
	<Message
		     id = "ZIP_NOTFOUND"
		message = "Archive not found: '%1'"
		   type = "user"
    />
	<Message
		     id = "ZIP_ALREADY_OPEN"
		message = "Zip file is already open."
		   type = "user"
    />
</MessageModule>


