package com.core.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "images")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class DepartmentImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;
    @Column(name = "original_file_name")
    private String originalFileName;
    @Column(name = "size")
    private Long size;
//    @Lob
////////    @Type("org.hibernate.type.BinaryType")
////////    @JdbcType(VarbinaryJdbcType.class)
////////    @JdbcTypeCode(Types.VARBINARY)
//    private byte[] bytes;
    @ManyToOne
    private Department department;
    @Column(name = "content_type")
    private String contentType;

    @Column(name = "bytesToString",length = 5000)
    private String bytesToString;

}
